'use server';

import { revalidatePath } from 'next/cache';
import { createReview } from '@/api/reviews';

export const selectSortingAction = async (formData: FormData) => {
	// const formReview = Object.fromEntries(formData);
	console.log('formReview', formData);
};
