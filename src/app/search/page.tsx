import { getProductsByName } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

export default async function SearchedProductsPage({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const query = searchParams.query || '';

	const products = await getProductsByName(query);

	return (
		<main className=" mx-auto max-w-7xl text-center text-cyan-50">
			<h1 role="heading">Search Result</h1>
			<ul>
				<ProductList products={products} />
			</ul>
		</main>
	);
}
