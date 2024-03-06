import Link from 'next/link';
import { ProductCoverCoverImage } from '@/components/atoms/ProductCoverCoverImage';
import { ProductListItemDescription } from '@/components/atoms/ProductListItemDescription';
import { type ProductListItemFragment } from '@/gql/graphql';

export const ProductListItem = (product: ProductListItemFragment) => {
	return (
		<>
			<li key={product.id} className="group">
				<Link href={`/product/${product.id}`}>
					<article>
						<ProductCoverCoverImage
							src={product.product_image}
							alt={product.name}
						/>
						<ProductListItemDescription
							name={product.name}
							price={product.price}
							categories={product.categories}
						/>
					</article>
				</Link>
			</li>
		</>
	);
};
