import { getProductsList } from '@/api/products';

export default async function ProductsPage({
	params,
}: {
	params: { page: number };
}) {
	const pageNumber = params.page;

	console.log(pageNumber);

	// pageNumber = pageNumber <= 0 ? 1 : pageNumber;
	const nextPage = Number(pageNumber) * Number(countOfProduct);

	const products = await getProductsList(pageNumber);
	console.log(products);

	// return (
	// 	<main className="container mx-auto">
	// 		<h1 className="py-4 text-center text-3xl">Strona produktów</h1>
	// 		<div className="flex justify-end">
	// 			<Pagination
	// 			// currentPage={products.paginations.currentPage}
	// 			// totalPages={data.paginations.totalPages}
	// 			// limit={4}
	// 			/>
	// 		</div>
	// 		<ProductsList products={data.products} />
	// 	</main>
	// );
}
