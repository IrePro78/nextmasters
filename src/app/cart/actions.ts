'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { addToCart, getOrCreateCart } from '@/api/carts';

export async function addToCartAction(formData: FormData) {
	// console.log('formData', formData);

	const cart = await getOrCreateCart();
	if (!cart) {
		throw new Error('Could not create cart');
	}
	redirect('/cart');
	// await addToCart(cart.id, formData.);

	cookies().set('cartId', cart.id);
	// await addToCart(cart.id, formData);
	// console.log('cart', cart);
}
