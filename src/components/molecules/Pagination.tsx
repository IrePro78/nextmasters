'use client';

import Link from 'next/link';
import { type Route } from 'next';
import { usePathname } from 'next/navigation';
import { ActiveLink } from '@/components/ActiveLink';

export const Pagination = ({
	numOfPages,
	baseUrl,
}: {
	numOfPages: number;
	baseUrl: string;
}) => {
	const currentpathname = usePathname();
	const currentNumberPage = currentpathname?.includes('/')
		? currentpathname.split('/').pop()
		: 1;

	return (
		<>
			<nav className="text-center">
				<ul
					aria-label="pagination"
					className="inline-flex -space-x-px text-sm "
					role="link"
				>
					<Link
						href={
							`/${baseUrl}/${Number(currentNumberPage) > 1 ? Number(currentNumberPage) - 1 : Number(currentNumberPage)}` as Route
						}
						className="ms-0 flex h-10 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-zinc-800 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-slate-700 dark:hover:text-white"
					>
						Previous
					</Link>
					{Array.from({ length: numOfPages }, (_, i) => i + 1).map(
						(page) => {
							return (
								<li key={page}>
									<ActiveLink
										href={`/${baseUrl}/${page}` as Route}
										className="flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-slate-700 dark:hover:text-white"
										activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
									>
										{page}
									</ActiveLink>
								</li>
							);
						},
					)}
					<Link
						href={
							`/${baseUrl}/${numOfPages > Number(currentNumberPage) ? Number(currentNumberPage) + 1 : Number(currentNumberPage)}` as Route
						}
						className="flex h-10 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-slate-700 dark:hover:text-white"
					>
						Next
					</Link>
				</ul>
			</nav>
		</>
	);
};
