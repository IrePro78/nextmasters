import { ActiveLink } from '@/components/ActiveLink';

export const Navbar = async () => {
	return (
		<nav className=" mx-auto flex max-w-7xl items-center justify-between gap-4 bg-zinc-900  p-6 py-6">
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
		</nav>
	);
};
