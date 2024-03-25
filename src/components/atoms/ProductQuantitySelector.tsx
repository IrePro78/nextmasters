'use client';
import { useOptimistic } from 'react';
import { DecrementProductQuantity } from '@/components/atoms/DecrementProductQuantity';
import { IncrementProductQuantity } from '@/components/atoms/IncrementProductQuantity';
import { changeItemQuantity } from '@/app/cart/actions';

export const ProductQuantitySelector = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(state: number, amount: number) => state + amount,
	);

	const incrementQuantity = async () => {
		setOptimisticQuantity(1);
		await changeItemQuantity(itemId, optimisticQuantity + 1);
	};

	const decrementQuantity = async () => {
		setOptimisticQuantity(-1);
		await changeItemQuantity(itemId, optimisticQuantity - 1);
	};
	return (
		<form
			className="relative flex items-center justify-between gap-2 rounded-lg border border-slate-600 px-2 py-1"
			data-testid="quantity"
		>
			<DecrementProductQuantity
				quantityOpt={decrementQuantity}
				optimisticQuantity={optimisticQuantity}
			/>
			{optimisticQuantity}
			<IncrementProductQuantity quantityOpt={incrementQuantity} />
		</form>
	);
};
