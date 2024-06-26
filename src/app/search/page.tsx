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
		<main className=" container mx-auto text-center text-cyan-50">
			<h1
				className="pb-20 text-4xl font-extrabold first-letter:uppercase"
				role="heading"
			>
				Search Results
			</h1>
			<ul>
				{products.length !== 0 && <ProductList products={products} />}
			</ul>
		</main>
	);
}
