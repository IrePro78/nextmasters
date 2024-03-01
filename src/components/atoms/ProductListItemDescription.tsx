import { formatMoney } from '@/utils/formater';

export const ProductListItemDescription = ({
	name,
	price,
	category,
}: {
	name: string;
	price: number;
	category: { id: string; name: string }[];
}) => {
	return (
		<article>
			<div className="mt-2 flex justify-between">
				<div>
					<h3 className="text-sm font-semibold text-gray-950">
						{name}
					</h3>
					<p className="text-sm text-gray-700">
						{category?.map((category) => category.name).join(', ')}
					</p>
					<span className="sr-only">Cena:</span>
				</div>
				<p className="text-sm text-gray-950">
					<span className="sr-only">Cena:</span> {formatMoney(price)}
				</p>
			</div>
		</article>
	);
};
