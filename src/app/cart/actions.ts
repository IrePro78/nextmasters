'use server';

import { cookies } from 'next/headers';
import { addToCart, getOrCreateCart } from '@/api/carts';

export async function addToCartAction(formData: FormData) {
	console.log(formData);
	const cart = await getOrCreateCart();
	cookies().set('cartId', cart.id);
	await addToCart(cart.id, formData);
	console.log('cart', cart);
}
