import {
	CartCreateDocument,
	CartFragment,
	CartGetByIdDocument,
} from '@/gql/graphql';
import { executeGraphQLQuery } from '@/lib/graphqlApi';
import { cookies } from 'next/headers';

export const getCartById = async (cartId: string) => {
	return executeGraphQLQuery(CartGetByIdDocument, {
		id: cartId,
	});
};

export const createCart = async (createOrderData: ) => {
	return executeGraphQLQuery(CartCreateDocument, {
		
	});
};

export const addToCart = async (cartId: string, formData: FormData) => {}

export const getOrCreateCart = async (): Promise<CartFragment> => {
	const cartId = cookies().get('cartId')?.value;
	if (cartId) {
		const cart = await getCartById(cartId);
		if (!cart.order) {
			cookies().delete('cartId');
			const cart = await createCart({});
			if (!cart.createOrder) throw new Error('Could not create cart');
			cookies().set('cartId', cart.createOrder.id);
			return cart.createOrder;
		} else {
			return cart.order;
		}
	} else {
		const cart = await createCart({});
		if (!cart.createOrder) throw new Error('Could not create cart');
		cookies().set('cartId', cart.createOrder.id);
		return cart.createOrder;
	}
}
