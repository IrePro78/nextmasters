'use server';
import { cookies } from 'next/headers';
import { revalidatePath, revalidateTag } from 'next/cache';
import Stripe from 'stripe';
import {
	addToCart,
	getCartByFromCookies,
	getOrCreateCart,
	removeItemFromCart,
	updateItemQuantity,
} from '@/api/carts';
import { getProductById } from '@/api/products';

export const addToCartAction = async (formData: FormData) => {
	const productId = formData.get('productId');

	const product = await getProductById(productId as string);

	const cart = await getOrCreateCart();

	const item = cart.orderItems?.find(
		(item) => item.product?.shift()?.id === productId,
	);

	if (item) {
		await updateItemQuantity(item.id, item.quantity + 1);
		revalidateTag('cart');
		return;
	}
	await addToCart(cart.id, product.id, 1, 1 * product.price);
	revalidateTag('cart');

	if (!cart) {
		throw new Error('Could not create cart');
	}

	cookies().set('cartId', cart.id);
};

export const changeItemQuantity = async (
	itemId: string,
	quantity: number,
) => {
	await updateItemQuantity(itemId, quantity);
	revalidatePath('/cart');
};

export const removeItemFromCartAction = async (
	formData: FormData,
) => {
	const itemId = formData.get('itemId') as string;

	if (!itemId) {
		throw new Error('Item not found');
	}
	await removeItemFromCart(itemId);
	revalidateTag('cart');
};

export const handlePaymentAction = async () => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error('Missing Stripe secret key');
	}
	const cart = await getCartByFromCookies();
	if (!cart) {
		throw new Error('Cart not found');
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: '2023-10-16',
		typescript: true,
	});

	const paymentIntent = await stripe.paymentIntents.create({
		amount: cart.totalAmount,
		currency: 'usd',
		automatic_payment_methods: {
			enabled: true,
		},
		metadata: { orderId: cart.id },
	});

	if (!paymentIntent.client_secret) {
		throw new Error('Could not create payment intent');
	}
	return { clientSecret: paymentIntent.client_secret };
};
