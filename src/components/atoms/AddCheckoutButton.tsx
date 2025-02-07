'use client';
import { CreditCard } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export const AddToCheckoutButton = ({
	statusButton,
}: {
	statusButton: boolean;
}) => {
	const formStatus = useFormStatus();

	return (
		<>
			<button
				disabled={statusButton || formStatus.pending}
				type="submit"
				className=" text-md mt-4 flex w-40 items-center justify-center gap-2 rounded p-4 py-2 font-normal text-white hover:bg-gray-500 hover:no-underline focus:outline-none focus:ring-1 focus:ring-slate-200 dark:bg-gray-800"
			>
				<CreditCard size={16} />
				Checkout
			</button>
		</>
	);
};
