'use client';
import { type ChangeEvent, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { type Route } from 'next';

export const ProductSortingSelect = () => {
	const [sortType, setSortType] = useState('');
	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortType(e.target.value);
	};

	useEffect(() => {
		if (sortType !== '') {
			router.push(`${pathname}?sort=${sortType}` as Route);
		}
	}, [pathname, router, sortType]);

	return (
		<div className="flex ">
			<select
				data-testid="sort-by-rating"
				id="sorting_select"
				onChange={handleChange}
				name="sorting"
				defaultValue={sortType}
				className="peer block w-auto rounded-md border  border-gray-200  bg-slate-700 px-2 py-2 text-sm  focus:border-gray-200  focus:ring-1 dark:border-gray-500 dark:text-gray-300"
			>
				<option value="default">...</option>
				<option value="name" data-testid="sort-by-name">
					Name
				</option>
				<option value="price" data-testid="sort-by-price">
					Price
				</option>
				<option value="rating" data-testid="sort-by-rating">
					Top Rated
				</option>
			</select>
		</div>
	);
};
