import { getProductsByCategorySlug } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

export default async function CategoryPage({
	params,
}: {
	params: { category: string; page: string };
}) {
	const productsInThisCategory = await getProductsByCategorySlug(
		params.category,
	);
	return (
		<main className="mx-auto min-h-screen max-w-7xl">
			<ProductList products={productsInThisCategory} />
		</main>
	);
}
