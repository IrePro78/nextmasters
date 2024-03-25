'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath, revalidateTag } from 'next/cache';
import {
	addToCart,
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
		redirect('/cart');
	}
	await addToCart(cart.id, product.id, 1, 1 * product.price);
	revalidateTag('cart');

	if (!cart) {
		throw new Error('Could not create cart');
	}
	redirect('/cart');

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
