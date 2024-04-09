'use client';
import { CreditCard } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export const AddToPaymentButton = () => {
	const { pending } = useFormStatus();

	return (
		<>
			<button
				disabled={pending}
				type="submit"
				className=" text-md mt-4 flex w-full max-w-xl items-center justify-center gap-2 rounded bg-gray-900 p-4 py-2 font-normal text-white hover:bg-gray-500 hover:no-underline focus:outline-none focus:ring-1 focus:ring-slate-200"
			>
				<CreditCard size={16} />
				<span id="button-text">
					{pending ? (
						<div className="spinner" id="spinner"></div>
					) : (
						'Pay'
					)}
				</span>
			</button>
		</>
	);
};
