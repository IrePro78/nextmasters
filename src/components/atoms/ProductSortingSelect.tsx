// 'use-client';
import { useState } from 'react';
import { selectSortingAction } from '@/app/products/action';

export const ProductSortingSelect = () => {
	return (
		<div className="">
			<form className="mx-auto max-w-sm" action={selectSortingAction}>
				{/* <label htmlFor="underline_select" className="sr-only">
					Underline select
				</label> */}
				<select
					id="underline_select"
					value={selectSortingAction}
					name="sorting"
					className="peer block w-auto appearance-none border-0 border-b-2 border-slate-800 bg-slate-700 px-2 py-2 text-sm text-gray-500 focus:border-gray-200  focus:ring-0 dark:border-gray-700 dark:text-gray-400"
				>
					<option selected>Choose a sorting</option>
					Featured
					<option value="CA">Canada</option>
					<option value="FR">France</option>
					<option value="DE">Germany</option>
				</select>
			</form>
		</div>
	);
};
