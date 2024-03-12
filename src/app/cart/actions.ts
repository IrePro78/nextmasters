'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { addToCart, getOrCreateCart } from '@/api/carts';
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
	// await addToCart(cart.id, product.id, 3);

	cookies().set('cartId', cart.id);
};
export const changeItemQuantity = async (
	itemId: string,
	quantity: number,
) => {
	console.log('changeItemQuantity', itemId, quantity);
	revalidatePath('/cart');
	next: {
		tags: ['cart'];
	}

	return '';
};
