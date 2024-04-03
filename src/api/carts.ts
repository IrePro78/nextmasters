'use server';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import {
	CartCreateDocument,
	type CartFragment,
	CartGetByIdDocument,
	CartAddProductDocument,
	CartSetProductQuantityDocument,
	CartRemoveItemDocument,
} from '@/gql/graphql';
import { executeGraphQLQuery } from '@/lib/graphqlApi';

export const getCartById = async (cartId: string) => {
	return executeGraphQLQuery({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
	});
};

export const createCart = async () => {
	return executeGraphQLQuery({
		query: CartCreateDocument,
		variables: { totalAmount: 0 },
	});
};

export const addToCart = async (
	orderId: string,
	productId: string,
	quantity: number,
	total: number,
) => {
	return executeGraphQLQuery({
		query: CartAddProductDocument,
		variables: {
			orderId,
			productId,
			quantity,
			total,
		},
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
		const cart = await executeGraphQLQuery({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			next: {
				tags: ['cart'],
			},
		});
		revalidateTag('cart');

		return cart.order;
	}
};

export const updateItemQuantity = async (
	itemId: string,
	quantity: number,
) => {
	return executeGraphQLQuery({
		query: CartSetProductQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
		next: {
			tags: ['cart'],
		},
	});
};

export const removeItemFromCart = async (itemId: string) => {
	return executeGraphQLQuery({
		query: CartRemoveItemDocument,
		variables: {
			itemId,
		},
		next: {
			tags: ['cart'],
		},
	});
};
