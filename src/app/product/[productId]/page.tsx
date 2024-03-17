import { Suspense } from 'react';
import { type Metadata } from 'next';
import { getProductById } from '@/api/products';

import { SuggestedProducts } from '@/components/organism/SuggestedProducts';
import { ProductCard } from '@/components/molecules/ProductCard';
import { ProductReviews } from '@/components/organism/ProductReviews';

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products?.map((product) => ({
// 		productId: product.id,
// 	}));
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string; description: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product?.name,
			description: product?.description || '',
			images: {
				url: product?.product_image || '',
				width: 800,
				height: 600,
				alt: product.name,
			},
		},
	};
};

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	if (!product) {
		throw new Error('Product not found');
	}

	return (
		<>
			<article className="container mx-auto">
				<h1 className="text-center">{product.name}</h1>
				<div>
					<ProductCard product={product} />
				</div>
			</article>
			<aside>
				<Suspense>
					<ProductReviews productId={params.productId} />
				</Suspense>
			</aside>

			<aside>
				{product.categories && (
					<Suspense>
						<SuggestedProducts categories={product.categories} />
					</Suspense>
				)}
			</aside>
		</>
	);
}
