import { ProductCoverCoverImage } from '@/components/atoms/ProductCoverCoverImage';
import { ProductListItemDescription } from '@/components/atoms/ProductListItemDescription';
import { type ProductItemType } from '@/types/types';

export const ProductListItem = ({ product }: ProductItemType) => {
	return (
		<li>
			<article>
				<ProductCoverCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
