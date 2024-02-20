import { getProductsList } from '@/api/products';
import { Pagination } from '@/components/molecules/Pagination';
import { ProductList } from '@/components/organism/ProductList';

export default async function ProductsPage({
	props,
	params,
}: {
	params: { page: number };
	props: number;
}) {
	const { page } = params;
	const numOfProducts = 4;

	const pageNumber = page === 1 ? 0 : page - 1;
	const nextNumberOfPproducts =
		page <= 1 ? pageNumber : pageNumber * numOfProducts;

	// if (page <= 1) {
	// 	console.log();

	// }

	console.log(numOfProducts, page, pageNumber, nextNumberOfPproducts);

	const products = await getProductsList(
		numOfProducts,
		nextNumberOfPproducts,
	);

	return (
		<main className="container mx-auto">
			<h1 className="py-4 text-center text-3xl">Pdoduct Page</h1>
			<div className="flex justify-end">
				<Pagination numOfPages={props} />
			</div>
			<ProductList products={products} />
		</main>
	);
}
