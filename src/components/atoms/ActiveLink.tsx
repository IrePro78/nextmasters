'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type ReactNode } from 'react';

export const ActiveLink = ({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<>
			<Link
				href="/products"
				className={clsx(
					` text-blue-400 hover:text-blue-600`,

					{ undefined: isActive },
					pathname === href ? 'active' : '',
				)}
			>
				Poducts
			</Link>
		</>
	);
};
