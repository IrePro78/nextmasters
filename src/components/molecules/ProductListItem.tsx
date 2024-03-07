import Link from 'next/link';
import { type ProductListItemFragment } from '@/gql/graphql';
import { ProductListItemCard } from '@/components/molecules/ProductListItemCard';

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<>
			<li key={product.id} className="group">
				<Link href={`/product/${product.id}`}>
					<article>
						<ProductListItemCard product={product} />
					</article>
				</Link>
			</li>
		</>
	);
};
