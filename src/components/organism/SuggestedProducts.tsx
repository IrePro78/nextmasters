import { getProductsByCategorySlug } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

export const SuggestedProducts = async ({
	categories,
}: {
	categories: { slug: string }[];
}) => {
	if (!categories)
		throw new Error('No categories provided for suggested products');

	const products = await getProductsByCategorySlug(
		String(categories[0]?.slug),
	);
	if (!products) {
		throw new Error("Can't find related products");
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
		</>
	);
};
