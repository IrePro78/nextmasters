import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from '@/gql/graphql';
import { executeGraphQLQuery } from '@/lib/graphqlApi';

// export const BASE_URL = 'https://graphql.hyperfunctor.com/graphql';
// 'https://naszsklep-api.vercel.app/api/products';

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

export const getProductsByCategorySlug = async (
	slug: string,
	take?: number,
	skip?: number,
) => {
	const graphqlResponse = await executeGraphQLQuery(
		ProductsGetByCategorySlugDocument,
		{ slug, take, skip },
	);

	const products = graphqlResponse.categoryBySlug?.products?.map(
		(product) => {
			return {
				id: product.id,
				name: product.name,
				description: product.description,
				price: product.price,
				coverImage: {
					alt: product.name,
					src: product.product_image,
				},
			};
		},
	);
	return products;
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
