// 'use client';

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

			{/* <input
				type="text"
				id="counter-input"
				data-input-counter
				className="max-w-[2.5rem] flex-shrink-0 border-0 bg-transparent text-center text-sm font-normal text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
				defaultValue={quantity}
				// value={quantity}
				required
			/> */}
			<IncrementProductQuantity quantity={quantity} itemId={itemId} />
		</form>
	);
};
