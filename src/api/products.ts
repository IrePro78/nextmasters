import { type ProductItemType } from '@/types/types';

const BASE_URL = 'https://naszsklep-api.vercel.app/api/products';

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
	const res = await fetch(BASE_URL);
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
	const res = await fetch(`${BASE_URL}/${productId}`);
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
