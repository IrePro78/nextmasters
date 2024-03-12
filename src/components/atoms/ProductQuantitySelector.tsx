'use client';

export const ProductQuantitySelector = () => {
	return (
		<div className="relative flex items-center rounded-lg border border-slate-600 px-2">
			<button
				type="button"
				id="decrement-button"
				data-input-counter-decrement="counter-input"
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
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h16"
					/>
				</svg>
			</button>
			<input
				type="text"
				id="counter-input"
				data-input-counter
				className="max-w-[2.5rem] flex-shrink-0 border-0 bg-transparent text-center text-sm font-normal text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
				placeholder=""
				value={1}
				required
			/>
			<button
				type="button"
				id="increment-button"
				data-input-counter-increment="counter-input"
				className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
			>
				<svg
					className="h-2.5 w-2.5 text-gray-900 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 18 18"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 1v16M1 9h16"
					/>
				</svg>
			</button>
		</div>
	);
};
