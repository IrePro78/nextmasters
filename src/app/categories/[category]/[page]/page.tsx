import { notFound } from 'next/navigation';
import { getProductsByCategorySlug } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

export default async function CategoryPage({
	params,
}: {
	params: { category: string; page: number };
}) {
	const numOfProducts = 4;

	const { category, page } = params;

	const pageNumber = page === 1 ? 0 : page - 1;

	const nextNumberOfPproducts =
		page <= 1 ? pageNumber : pageNumber * numOfProducts;

	const productsInThisCategory = await getProductsByCategorySlug(
		category,
		numOfProducts,
		nextNumberOfPproducts,
	);
	if (!productsInThisCategory) {
		throw notFound();
	}
	return (
		<main className="container mx-auto">
			<ProductList products={productsInThisCategory} />
		</main>
	);
}
