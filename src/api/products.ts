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
	const graphqlResponse = await executeGraphQLQuery({
		query: ProductsGetListDocument,
		variables: { take, skip },
		next: {
			tags: ['products'],
		},
	});
	return graphqlResponse.products;
};
export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphQLQuery({
		query: ProductGetByIdDocument,
		variables: { id },
	});
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

	const graphqlResponse = await executeGraphQLQuery({
		query: ProductsGetByNameDocument,
		variables: { name, take, skip },
	});
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
	const graphqlResponse = await executeGraphQLQuery({
		query: ProductsGetByCategorySlugDocument,
		variables: { slug, take, skip },
	});

	if (!graphqlResponse.categoryBySlug) {
		throw new Error('Category not found');
	}
	return graphqlResponse.categoryBySlug?.products;
};

export const getProductsByCollectionSlug = async (
	slug: string,
	take?: number,
	skip?: number,
) => {
	const graphqlResponse = await executeGraphQLQuery({
		query: ProductsGetByCollectionSlugDocument,
		variables: { slug, take, skip },
	});

	if (!graphqlResponse.collectionBySlug) {
		throw new Error('Collection not found');
	}

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
