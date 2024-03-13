import { DecrementProductQuantity } from '@/components/atoms/DecrementProductQuantity';
import { IncrementProductQuantity } from '@/components/atoms/IncrementProductQuantity';

export const ProductQuantitySelector = async ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	return (
		<form
			className="relative flex items-center rounded-lg border border-slate-600 px-2 py-1"
			data-testid="quantity"
		>
			<DecrementProductQuantity quantity={quantity} itemId={itemId} />

			<IncrementProductQuantity quantity={quantity} itemId={itemId} />
		</form>
	);
};
