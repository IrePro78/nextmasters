import { Suspense } from 'react';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductById } from '@/api/products';
import { ProductCoverCoverImage } from '@/components/atoms/ProductCoverCoverImage';
import { ProductListItemDescription } from '@/components/atoms/ProductListItemDescription';
import { SuggestedProducts } from '@/components/organism/SuggestedProducts';

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
	};
};

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	if (!product.category) {
		return notFound();
	}

	return (
		<>
			<article className=" mx-auto max-w-md text-center text-cyan-50">
				<h1 className="text-center">{product.name}</h1>
				<ProductCoverCoverImage {...product.coverImage} />
				<ProductListItemDescription
					name={product.name}
					category={product.category}
					price={product.price}
				/>
			</article>

			<aside>
				{product.category[0] && (
					<Suspense>
						<SuggestedProducts category={product.category[0]} />
					</Suspense>
				)}
			</aside>
		</>
	);
}
