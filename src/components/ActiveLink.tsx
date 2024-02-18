'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type ComponentProps } from 'react';
import { type Route } from 'next';

export const ActiveLink = ({
	href,
	exact = true,
	className,
	activeClassName,
	...props
}: {
	href: Route;
	exact?: boolean;
	props: ComponentProps<typeof Link>;
	className?: string;
	activeClassName?: string;
}) => {
	const pathname = usePathname();
	const isActive = exact && pathname === href;

	console.log(props);
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
