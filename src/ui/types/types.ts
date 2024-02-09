export type ProductItemType = {
	id?: string;
	product: {
		category: string;
		name: string;
		price: number;
		coverImage: {
			src: string;
			alt: string;
		};
	};
};
