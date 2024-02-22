import { log } from 'console';
import {
	ProductsGetListDocument,
	type TypedDocumentString,
} from '@/gql/graphql';
import { type ProductItemType } from '@/types/types';

// export const BASE_URL = 'https://graphql.hyperfunctor.com/graphql';
// 'https://naszsklep-api.vercel.app/api/products';

type ProductResponseItem = {
	id: string;
	name: string;
	price: number;
	description: string;
	category: string;
	product_image: string;
};

const executeGraphQLQuery = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_API_URL)
		throw new Error('GRAPHQL_API_URL is not defined');
	const res = await fetch(process.env.GRAPHQL_API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphQLResponse =
		(await res.json()) as GraphQLResponse<TResult>;
	if (graphQLResponse.errors) {
		throw TypeError('GraphQL query error', {
			cause: graphQLResponse.errors,
		});
	}
	return graphQLResponse.data;
};

export const getProductsList = async (
	take?: number,
	skip?: number,
) => {
	const variables = { take, skip };

	const graphqlResponse = await executeGraphQLQuery(
		ProductsGetListDocument,
		variables,
	);
	return graphqlResponse.getProducts?.map((product) => {
		log(product);
		return productResponseItemToProductItemType(product);
	});
};

export const getProductById = async (
	productId: ProductResponseItem['id'],
) => {
	const res = await fetch(
		`${process.env.GRAPHQL_API_URL}/${productId}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		name: product.name,
		category: product.category,
		description: product.description,
		price: product.price,
		coverImage: {
			alt: product.name,
			src: product.image,
		},
	};
};
