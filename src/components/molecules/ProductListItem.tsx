import Link from 'next/link';
import { ProductCoverCoverImage } from '@/components/atoms/ProductCoverCoverImage';
import { ProductListItemDescription } from '@/components/atoms/ProductListItemDescription';
import { type ProductListItemFragment } from '@/gql/graphql';

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
						<ProductCoverCoverImage
							src={product.product_image}
							alt={product.name}
						/>
						<ProductListItemDescription product={product} />
					</article>
				</Link>
			</li>
		</>
	);
};
