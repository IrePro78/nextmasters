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
					<h1
						className="text-sm font-semibold text-zinc-200"
						role="heading"
					>
						{name}
					</h1>
					<p className="text-sm text-zinc-200">
						{category?.map((category) => category.name).join(', ')}
					</p>
					<span className="sr-only">Cena:</span>
				</div>
				<p className="text-sm text-zinc-200">
					<span className="sr-only">Cena:</span> {formatMoney(price)}
				</p>
			</div>
		</article>
	);
};
