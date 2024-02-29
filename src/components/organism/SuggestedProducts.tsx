import { notFound } from 'next/navigation';
import { getProductsByCategorySlug } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

export const SuggestedProducts = async ({
	category,
}: {
	category: { slug: string };
}) => {
	const products = await getProductsByCategorySlug(category.slug);
	if (!products) {
		throw notFound();
	}

	const relatedProducts = products.sort(() => 0.5 - Math.random());

	return (
		<>
			<ul className="text-center" data-testid="related-products">
				<h2>Suggested Products</h2>
				{relatedProducts && (
					<ProductList products={relatedProducts.slice(0, 4)} />
				)}
			</ul>
			,
		</>
	);
};
