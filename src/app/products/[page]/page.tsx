import { getProductsList } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

export async function generateStaticParams() {
	const products = await getProductsList();
	if (!products) return [];

	const numOfPages = Math.ceil(products.length / 4);
	const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
	return pages.map((page) => ({ params: { page: page.toString() } }));
}

export default async function ProductsPage({
	params,
}: {
	params: { page: number };
}) {
	const { page } = params;
	const numOfProducts = 4;

	const pageNumber = page === 1 ? 0 : page - 1;
	const nextNumberOfPproducts =
		page <= 1 ? pageNumber : pageNumber * numOfProducts;

	const products = await getProductsList(
		numOfProducts,
		nextNumberOfPproducts,
	);

	return (
		<main className="container mx-auto">
			<h1 className="py-4 text-center text-3xl">Pdoduct Page</h1>
			<div className="flex justify-end"></div>
			<ProductList products={products} />
		</main>
	);
}
