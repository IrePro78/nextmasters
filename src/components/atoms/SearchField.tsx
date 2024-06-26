'use client';

import { useRouter } from 'next/navigation';
import { useState, type ChangeEvent, useEffect } from 'react';
import { useDebounce } from '@uidotdev/usehooks';

export const SearchField = () => {
	const [search, setSearch] = useState('');

	const searchTerm = useDebounce(search, 500);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const router = useRouter();

	useEffect(() => {
		if (searchTerm) router.push(`/search?query=${search}`);
	}, [searchTerm, router, search]);
	return (
		<input
			className="placeholder-black-400  block w-full rounded-lg border border-slate-600 bg-slate-800 bg-opacity-40 p-2.5 ps-5 text-sm "
			type="search"
			placeholder="search"
			onChange={handleChange}
			role="searchbox"
		/>
	);
};
