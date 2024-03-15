import { createReview } from '@/api/reviews';

export const addReviewAction = async (formData: FormData) => {
	const productId = formData.get('productId');

	await createReview();
};
