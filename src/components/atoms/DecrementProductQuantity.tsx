'use client';

import { useOptimistic } from 'react';
import { changeItemQuantity } from '@/app/cart/actions';

export const DecrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [
		optimisticDecrementQuantity,
		setOptimisticDecrementQuantity,
	] = useOptimistic(quantity, (state: number) => state - 1);
	return (
		<div className="mr-2">
			<button
				id="decrement-button"
				type="submit"
				disabled={optimisticDecrementQuantity === 1}
				formAction={async () => {
					setOptimisticDecrementQuantity(
						optimisticDecrementQuantity - 1,
					);
					await changeItemQuantity(
						itemId,
						optimisticDecrementQuantity - 1,
					);
				}}
				data-testid="decrement"
				className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
			>
				<svg
					className="h-2.5 w-2.5 text-gray-900 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 18 2"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M1 1h16"
					/>
				</svg>
			</button>
		</div>
	);
};
