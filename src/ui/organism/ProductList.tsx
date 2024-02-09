import { ProductListItem } from '@/ui/molecules/ProductListItem';
import { type ProductItemType } from '@/ui/types/types';

export const ProductList = ({
	products,
}: {
	products: ProductItemType[];
}) => {
	return (

		<div
			className=" gap--8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} {...product} />
			))}
		</div>

		<ul className="gap--8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => (
				<ProductListItem key={product.id} {...product} />
			))}
		</ul>

	);
};
