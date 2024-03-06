import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetByNameDocument,
	ProductsGetListDocument,
} from '@/gql/graphql';
import { executeGraphQLQuery } from '@/lib/graphqlApi';

export const getProductsList = async (
	take?: number,
	skip?: number,
) => {
	const variables = { take, skip };

	const graphqlResponse = await executeGraphQLQuery(
		ProductsGetListDocument,
		variables,
	);
	return graphqlResponse.products;
};
export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphQLQuery(
		ProductGetByIdDocument,
		{ id },
	);
	if (!graphqlResponse.product) {
		throw new Error('Product not found');
	}
	return graphqlResponse.product;
};

export const getProductsByName = async (
	name: string,
	take?: number,
	skip?: number,
) => {
	name = name === typeof 'string' ? name : name.toString();

	const graphqlResponse = await executeGraphQLQuery(
		ProductsGetByNameDocument,
		{ name, take, skip },
	);
	if (!graphqlResponse.productsByName) {
		throw new Error('Product not found');
	}
	return graphqlResponse.productsByName;
};

export const getProductsByCategorySlug = async (
	slug: string,
	take?: number,
	skip?: number,
) => {
	const graphqlResponse = await executeGraphQLQuery(
		ProductsGetByCategorySlugDocument,
		{ slug, take, skip },
	);

	return graphqlResponse.categoryBySlug?.products;
};

export const getProductsByCollectionSlug = async (
	slug: string,
	take?: number,
	skip?: number,
) => {
	const graphqlResponse = await executeGraphQLQuery(
		ProductsGetByCollectionSlugDocument,
		{ slug, take, skip },
	);

	return graphqlResponse.collectionBySlug?.products;
};

// export const getProductsByCategoryId = async (categoryId: string) => {
// 	const graphqlResponse = await executeGraphQLQuery(
// 		ProductsGetByCategoryIdDocument,
// 		{ categoryId },
// 	);

// 	const products = graphqlResponse.products?.map((product) => {
// 		return {
// 			id: product.id,
// 			name: product.name,
// 			description: product.description,
// 			price: product.price,
// 			coverImage: {
// 				alt: product.name,
// 				src: product.product_image,
// 			},
// 		};
// 	});
// 	return products;
// };
