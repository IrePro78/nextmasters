import Link from 'next/link';
import { ProductCoverCoverImage } from '@/components/atoms/ProductCoverCoverImage';
import { ProductListItemDescription } from '@/components/atoms/ProductListItemDescription';
import { type ProductItemType } from '@/types/types';

export const ProductListItem = (product: ProductItemType) => {
	return (
		<>
			<li key={product.id} className="group">
				<Link href={`/product/${product.id}`}>
					<article>
						<ProductCoverCoverImage {...product.coverImage} />
						<ProductListItemDescription {...product} />
					</article>
				</Link>
			</li>
		</>
	);
};
