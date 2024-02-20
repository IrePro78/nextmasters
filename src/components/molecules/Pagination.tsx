'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { ActiveLink } from '@/components/ActiveLink';

export const Pagination = ({
	numOfPages,
}: {
	numOfPages: number;
}) => {
	const currentNumberPage = usePathname().split('/').pop();
	console.log(currentNumberPage);

	return (
		<>
			<nav>
				<ul
					aria-label="pagination"
					className="mt-4 flex items-center justify-center gap-4"
				>
					<Link
						href={`/products/${Number(currentNumberPage) > 1 ? Number(currentNumberPage) - 1 : Number(currentNumberPage)}`}
					>
						{'<'}
					</Link>
					{numOfPages === 0 ? (
						<li>
							<Link href={`/products/${1}`}>
								1
								<ActiveLink
									href={`/products/${1}`}
									className="border-b-2 border-b-transparent text-lg"
									activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
								/>
							</Link>
						</li>
					) : (
						Array.from({ length: numOfPages }, (_, i) => i + 1).map(
							(page) => {
								return (
									<>
										<li key={page}>
											<Link href={`/products/${page}`}>
												{page}
												<ActiveLink
													href={`/products/${page}`}
													className="border-b-2 border-b-transparent text-lg"
													activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
												/>
											</Link>
										</li>
									</>
								);
							},
						)
					)}
					<Link
						href={`/products/${numOfPages > Number(currentNumberPage) ? Number(currentNumberPage) + 1 : Number(currentNumberPage)}`}
					>
						{'>'}
					</Link>
				</ul>
			</nav>
		</>
	);
};
