import Link from 'next/link';
import { ActiveLink } from '@/components/ActiveLink';

export const Navbar = async () => {
	return (
		<nav className=" mx-auto flex max-w-7xl justify-between bg-zinc-500 p-6 py-6">
			<Link href={'/'}>
				<span className=" flex-grow-0 p-2 text-3xl font-semibold text-zinc-950">
					My Shop
				</span>
			</Link>
			<div className="space-x-4">
				<ActiveLink
					href={'/'}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline "
				>
					Home
				</ActiveLink>
				<ActiveLink
					href={'/products'}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
				>
					All
				</ActiveLink>
			</div>
		</nav>
	);
};
