'use client';

import { type UrlObject } from 'url';
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
			<nav>
				<ul
					aria-label="pagination"
					className="mt-4 flex items-center justify-center gap-4"
				>
					<Link
						href={
							`/${baseUrl}/${Number(currentNumberPage) > 1 ? Number(currentNumberPage) - 1 : Number(currentNumberPage)}` as unknown as UrlObject
						}
					>
						{'<'}
					</Link>
					{numOfPages === 1 ? (
						<li>
							<ActiveLink
								href={`/${baseUrl}/${1}` as Route}
								className="border-b-2 border-b-transparent text-lg"
								activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
							>
								1
							</ActiveLink>
						</li>
					) : (
						Array.from({ length: numOfPages }, (_, i) => i + 1).map(
							(page) => {
								return (
									<li key={page}>
										<ActiveLink
											href={`/${baseUrl}/${page}` as Route}
											className="border-b-2 border-b-transparent text-lg"
											activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
										>
											{page}
										</ActiveLink>
									</li>
								);
							},
						)
					)}
					<Link
						href={
							`/${baseUrl}/${numOfPages > Number(currentNumberPage) ? Number(currentNumberPage) + 1 : Number(currentNumberPage)}` as Route
						}
					>
						{'>'}
					</Link>
				</ul>
			</nav>
		</>
	);
};
