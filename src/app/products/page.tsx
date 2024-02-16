import { getProducts } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

export default async function ProductsPage() {
	const products = await getProducts();
	return (
		<section className="mx-auto max-w-md bg-zinc-400 p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
