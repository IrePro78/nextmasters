import { getProductsList } from '@/api/products';
import { ProductList } from '@/components/organism/ProductList';

export const PromotionalProducts = async () => {
	const products = await getProductsList();
	if (!products) {
		throw new Error('No products found');
	}

	const promotionalProducts = products.sort(
		() => 0.5 - Math.random(),
	);

	return (
		<>
			<ul className="text-center" data-testid="products-list">
				<h2 className="py-4 text-center text-2xl" role="heading">
					Promotional Products
				</h2>
				{promotionalProducts && (
					<ProductList products={promotionalProducts.slice(0, 8)} />
				)}
			</ul>
		</>
	);
};
