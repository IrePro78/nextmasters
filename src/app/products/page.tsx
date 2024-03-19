import { getProductsList } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

const take = 20;
const skip = 0;

export default async function ProductsPage() {
	const products = await getProductsList(take, skip);
	if (!products) throw new Error("Can't find products");

	return (
		<>
			<section className="container mx-auto">
				<ProductList products={products} />
			</section>
		</>
	);
}
