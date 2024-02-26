import {
	ProductGetByIdDocument,
	ProductsGetListDocument,
	type TypedDocumentString,
} from '@/gql/graphql';

// export const BASE_URL = 'https://graphql.hyperfunctor.com/graphql';
// 'https://naszsklep-api.vercel.app/api/products';

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
	const products = graphqlResponse.products?.map((product) => {
		return {
			id: product.id,
			name: product.name,
			description: product.description,
			price: product.price,
			category: product.categories?.map((category) => ({
				id: category.id,
				name: category.name,
			})),
			coverImage: {
				alt: product.name,
				src: product.product_image,
			},
		};
	});
	products;
	return products;
};
export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphQLQuery(
		ProductGetByIdDocument,
		{ id },
	);
	if (!graphqlResponse.product) {
		throw new Error('Product not found');
	}
	const { name, description, price, categories, product_image } =
		graphqlResponse.product;

	return {
		id: graphqlResponse.product.id,
		name,
		description,
		price,
		category: categories?.map((category) => ({
			id: category.id,
			name: category.name,
		})),
		coverImage: {
			alt: name,
			src: product_image,
		},
	};
};
