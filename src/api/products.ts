import { type ProductItemType } from '@/types/types';

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	raiting: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductsList = async () => {
	const res = await fetch(
		'https://naszsklep-api.vercel.app/api/products',
	);
	const productsResponse =
		(await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(
		productResponseItemToProductItemType,
	);
	return products;
};

export const getProductById = async (
	productId: ProductResponseItem['id'],
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${productId}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		description: product.description,
		price: product.price,
		coverImage: {
			alt: product.title,
			src: product.image,
		},
	};
};
