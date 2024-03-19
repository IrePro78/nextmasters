'use client';
import { type ChangeEvent, useState, useEffect } from 'react';
import { selectSortingAction } from '@/app/products/action';

export const ProductSortingSelect = () => {
	const [sortType, setSortType] = useState('');

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortType(e.target.value);
	};

	useEffect(() => {
		if (sortType !== '') {
			selectSortingAction(sortType);
		}
	}, [sortType]);

	return (
		<div className="flex ">
			<select
				id="underline_select"
				onChange={handleChange}
				name="sorting"
				defaultValue={sortType}
				className="peer block w-auto rounded-md border  border-gray-200  bg-slate-700 px-2 py-2 text-sm  focus:border-gray-200  focus:ring-1 dark:border-gray-500 dark:text-gray-300"
			>
				<option value="null">...</option>
				<option value="price">Price</option>
				<option value="rating">Top Rated</option>
			</select>
		</div>
	);
};
