'use server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import {
	CartCreateDocument,
	type CartFragment,
	CartGetByIdDocument,
	CartAddProductDocument,
	CartSetProductQuantityDocument,
	CartRemoveItemDocument,
	ItemGetByIdDocument,
} from '@/gql/graphql';
import { executeGraphQLQuery } from '@/lib/graphqlApi';

export const getCartById = async (cartId: string) => {
	return executeGraphQLQuery(CartGetByIdDocument, {
		id: cartId,
	});
};

export const getOrderItemById = async (itemId: string) => {
	return executeGraphQLQuery(ItemGetByIdDocument, {
		id: itemId,
	});
};

export const createCart = async () => {
	return executeGraphQLQuery(CartCreateDocument, {});
};

export const addToCart = async (
	orderId: string,
	productId: string,
	quantity: number,
	total: number,
) => {
	return executeGraphQLQuery(CartAddProductDocument, {
		orderId,
		productId,
		quantity,
		total,
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
		revalidatePath('/cart');
		next: {
			tags: ['cart'];
		}

		return cart.order;
	}
};

export const updateItemQuantity = async (
	itemId: string,
	quantity: number,
) => {
	return executeGraphQLQuery(CartSetProductQuantityDocument, {
		itemId,
		quantity,
	});
};

export const removeItemFromCart = async (itemId: string) => {
	return executeGraphQLQuery(CartRemoveItemDocument, {
		itemId,
	});
};
