import { type ProductItemType } from '@/ui/types/types';
import { formatMoney } from '@/ui/utils/formater';

export const ProductListItemDescription = ({
	product: { name, price, category },
}: ProductItemType) => {
	return (
		<article>
			<div className="mt-2 flex justify-between">
				<div>
					<h3 className="text-sm font-semibold text-gray-950">
						{name}
					</h3>
					<p className="text-sm text-gray-700">{category}</p>
					<span className="sr-only">Cena:</span>
				</div>
				<p className="text-sm text-gray-950">
					<span className="sr-only">Cena:</span> {formatMoney(price)}
				</p>
			</div>
		</article>
	);
};
