import { type ProductListItemFragment } from '@/gql/graphql';
import { formatMoney } from '@/utils/formater';

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product,
}: ProductListItemDescriptionProps) => {
	return (
		<article>
			<div className="mt-2 flex justify-between">
				<div>
					<h3
						className="text-sm font-semibold text-zinc-200"
						role="heading"
					>
						{product.name}
					</h3>
					<p className="text-sm text-zinc-200">
						{product?.categories
							?.map((category) => category.name)
							.join(', ')}
					</p>
				</div>
				<p className="text-sm text-zinc-200">
					<span className="sr-only">Cena:</span>{' '}
					{formatMoney(product?.price)}
				</p>
			</div>
		</article>
	);
};
