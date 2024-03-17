'use server';

import { revalidatePath } from 'next/cache';
import { createReview } from '@/api/reviews';

export const addReviewAction = async (formData: FormData) => {
	const formReview = Object.fromEntries(formData);

	const review = {
		productId: formReview.productId as string,
		headline: formReview.headline as string,
		content: formReview.content as string,
		name: formReview.name as string,
		email: formReview.email as string,
		rating: Number(formReview.rating),
	};

	await createReview(review);
	revalidatePath(`/product/${formReview.productId as string}`);
};
