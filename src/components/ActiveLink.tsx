'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type ComponentProps } from 'react';

type ActiveLinkProps = ComponentProps<typeof Link> & {
	exact?: boolean;
	activeClassName?: string;
};

export const ActiveLink = ({
	href,
	exact = true,
	className,
	activeClassName,
	...props
}: ActiveLinkProps) => {
	const pathname = usePathname();

	const isActive =
		(exact
			? pathname ===
					(typeof href === 'string' ? href : href.pathname) ?? null
			: pathname.startsWith(String(href))) || false;

	return (
		<Link
			{...props}
			href={href}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive ? isActive : undefined}
			role="link"
		/>
	);
};
