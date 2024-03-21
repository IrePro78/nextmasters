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
		(state: number, amount: number) => state + Number(amount),
	);

	const incrementQuantity = () => {
		console.log('incrementQuantity');

		setOptimisticQuantity(1);
	};
	const decrementQuantity = () => {
		setOptimisticQuantity(optimisticQuantity - 1);
	};

	// const IncrementProductQuantity = async () => {
	// 	await changeItemQuantity(itemId, incrementQuantity());
	// };

	return (
		<form
			className="relative flex items-center rounded-lg border border-slate-600 px-2 py-1"
			data-testid="quantity"
		>
			{optimisticQuantity}

			<button
				formAction={async () => {
					incrementQuantity();
					await changeItemQuantity(itemId, optimisticQuantity);
				}}
			>
				+
			</button>
		</form>
	);
};
