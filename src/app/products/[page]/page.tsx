// import { getProductsList } from '@/api/products';
// import { Pagination } from '@/ui/molecules/Pagination';
// import { ProductsList } from '@/ui/organisms/ProductsList';

// export default async function ProductsPage({
// 	params,
// }: {
// 	params: { pageNumber: string };
// }) {
// 	const pageNumber = params.pageNumber || '1';
// 	const products = await getProductsList(pageNumber);
// 	return (
// 		<main className="container mx-auto">
// 			<h1 className="py-4 text-center text-3xl">Strona produktów</h1>
// 			<div className="flex justify-end">
// 				<Pagination
// 					currentPage={data.paginations.currentPage}
// 					totalPages={data.paginations.totalPages}
// 					limit={4}
// 				/>
// 			</div>
// 			<ProductsList products={data.products} />
// 		</main>
// 	);
// }
