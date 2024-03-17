'use client';

import { useFormStatus } from 'react-dom';
import { Star } from 'lucide-react';

export const AddReviewButton = () => {
	const formStatus = useFormStatus();
	return (
		<button
			disabled={formStatus.pending}
			type="submit"
			data-testid="add-review-button"
			className="flex items-center gap-1 rounded px-2 py-1.5 text-center text-sm font-normal text-white hover:bg-gray-500 hover:no-underline focus:outline-none focus:ring-1 focus:ring-slate-200 dark:bg-gray-800"
		>
			<Star size={16} />
			Add a review
		</button>
	);
};
