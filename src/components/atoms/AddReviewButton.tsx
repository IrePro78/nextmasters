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
			className="flex items-center gap-1 px-2 py-1.5 text-center text-sm font-extralight text-white underline hover:no-underline focus:outline-none focus:ring-slate-200 disabled:cursor-wait dark:bg-gray-800"
		>
			<Star size={16} />
			Leave a review
		</button>
	);
};
