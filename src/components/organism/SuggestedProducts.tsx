import { getProductsList } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

export const SuggestedProducts = async () => {
	const products = await getProductsList();
	return (
		<div>
			<h2>Suggested Products</h2>
			<ProductList products={products.slice(-4)} />
		</div>
	);
};
