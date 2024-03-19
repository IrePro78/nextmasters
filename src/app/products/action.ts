'use server';

import { revalidatePath } from 'next/cache';
import { createReview } from '@/api/reviews';

export const selectSortingAction = (sortType: string) => {
	// const formReview = Object.fromEntries(formData);
	console.log(sortType);
};
