'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { addToCart, getOrCreateCart } from '@/api/carts';
import { getProductById } from '@/api/products';

export async function addToCartAction(formData: FormData) {
	const productId = formData.get('productId');
	const product = await getProductById(productId as string);

	const cart = await getOrCreateCart();
	await addToCart(cart.id, product.id, 3);

	if (!cart) {
		throw new Error('Could not create cart');
	}
	redirect('/cart');
	await addToCart(cart.id, product.id, 3);

	cookies().set('cartId', cart.id);
}
