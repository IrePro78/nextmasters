'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import {
	addToCart,
	getOrCreateCart,
	getOrderItemById,
	removeItemFromCart,
	updateItemQuantity,
} from '@/api/carts';
import { getProductById } from '@/api/products';

export const addToCartAction = async (formData: FormData) => {
	const productId = formData.get('productId');

	const product = await getProductById(productId as string);

	if (!product.price) {
		throw new Error('Product not found');
	}

	const cart = await getOrCreateCart();
	await addToCart(cart.id, product.id, 1, 1 * product.price);

	if (!cart) {
		throw new Error('Could not create cart');
	}
	redirect('/cart');

	cookies().set('cartId', cart.id);
	revalidatePath('/cart');
};
export const changeItemQuantity = async (
	itemId: string,
	quantity: number,
) => {
	await updateItemQuantity(itemId, quantity);
	revalidatePath('/cart');
	next: {
		tags: ['cart'];
	}
};
export const removeItemFromCartAction = async (
	formData: FormData,
) => {
	const itemId = formData.get('itemId') as string;

	if (!itemId) {
		throw new Error('Item not found');
	}
	await removeItemFromCart(itemId);
	revalidatePath('/cart');
	next: {
		tags: ['cart'];
	}
};
