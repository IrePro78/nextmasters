import Link from 'next/link';
import { type Route } from 'next';
import { ActiveLink } from '@/components/ActiveLink';
import { getCategoriesList } from '@/api/categories';

export const Navbar = async () => {
	const categories = await getCategoriesList();

	return (
		<nav className=" mx-auto flex max-w-7xl items-center justify-between gap-4 bg-zinc-500 p-6 py-6">
			<Link href={'/'}>
				<span className=" flex-grow-0 p-2 text-3xl font-semibold text-zinc-950">
					My Shop
				</span>
			</Link>
			<ul className="flex items-center gap-4" role="navigation">
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

				{categories &&
					categories.map((category) => (
						<ActiveLink
							key={category.id}
							href={`/categories/${category.slug}` as Route}
							className="border-b-2 border-b-transparent text-lg"
							activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
						>
							{category.name}
						</ActiveLink>
					))}
			</ul>
		</nav>
	);
};
