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
			<h1
				className="pb-20 text-4xl font-extrabold first-letter:uppercase"
				role="heading"
				data-testid="products-list"
			>
				Search Results
			</h1>
			<ul data-testid="products-list">
				{products.length !== 0 && <ProductList products={products} />}
			</ul>
		</main>
	);
}
