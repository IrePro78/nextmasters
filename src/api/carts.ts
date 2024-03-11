import { cookies } from 'next/headers';
import {
	CartCreateDocument,
	type CartFragment,
	CartGetByIdDocument,
	CartAddProductDocument,
} from '@/gql/graphql';
import { executeGraphQLQuery } from '@/lib/graphqlApi';

export const getCartById = async (cartId: string) => {
	return executeGraphQLQuery(CartGetByIdDocument, {
		id: cartId,
	});
};

export const createCart = async () => {
	return executeGraphQLQuery(CartCreateDocument, {});
};

export const addToCart = async (
	orderId: string,
	productId: string,
	quantity: number,
) => {
	return executeGraphQLQuery(CartAddProductDocument, {
		orderId,
		productId,
		quantity,
	});
};

export const getOrCreateCart = async (): Promise<CartFragment> => {
	const existingCart = await getCartByFromCookies();
	if (existingCart) {
		return existingCart;
	}
	cookies().delete('cartId');
	const cart = await createCart();
	if (!cart.createOrder) throw new Error('Could not create cart');
	cookies().set('cartId', cart.createOrder.id, {
		httpOnly: true,
		sameSite: 'lax',
		secure: false,
	});
	return cart.createOrder;
};

export const getCartByFromCookies = async () => {
	const cartId = cookies().get('cartId')?.value;
	if (cartId) {
		const cart = await executeGraphQLQuery(CartGetByIdDocument, {
			id: cartId,
		});
		console.log('cart', cart);

		return cart.order;
	}
};
