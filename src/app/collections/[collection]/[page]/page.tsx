import { notFound } from 'next/navigation';
import { getProductsByCollectionSlug } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

export default async function CollectionPage({
	params,
}: {
	params: { collection: string; page: number };
}) {
	const numOfProducts = 4;

	const { collection, page } = params;

	const pageNumber = page === 1 ? 0 : page - 1;

	const nextNumberOfPproducts =
		page <= 1 ? pageNumber : pageNumber * numOfProducts;

	const productsInThisCollection = await getProductsByCollectionSlug(
		collection,
		numOfProducts,
		nextNumberOfPproducts,
	);
	if (!productsInThisCollection) {
		throw notFound();
	}
	return (
		<main className="container mx-auto ">
			<h1 className="py-4 text-center text-3xl" role="heading">
				{collection}
			</h1>
			<ProductList products={productsInThisCollection} />
		</main>
	);
}
