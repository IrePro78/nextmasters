'use client';

import { useFormStatus } from 'react-dom';

export const AddToCartButton = () => {
	const formStatus = useFormStatus();
	return (
		<button
			disabled={formStatus.pending}
			type="submit"
			data-testid="add-to-cart-button"
			className="rounded-md bg-slate-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:border-slate-600  focus:ring-1 focus:ring-slate-200 disabled:cursor-wait dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:bg-slate-800"
		>
			Add to cart
		</button>
	);
};
