import { ProductCoverCoverImage } from '@/ui/atoms/ProductCoverCoverImage';
import { ProductListItemDescription } from '@/ui/atoms/ProductListItemDescription';
import { type ProductItemType } from '@/ui/types/types';

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
