import Link from 'next/link';
import { type Route } from 'next';
import { ActiveLink } from '@/components/ActiveLink';
import { getCategoriesList } from '@/api/categories';
import { getCollectionsList } from '@/api/collections';
import { SearchField } from '@/components/atoms/SearchField';

export const Navbar = async () => {
	const collections = await getCollectionsList();

	return (
		<nav className=" mx-auto flex max-w-7xl items-center justify-between gap-4 bg-zinc-500 p-6 py-6">
			<Link href={'/'}>
				<span className=" flex-grow-0 p-2 text-3xl font-semibold text-zinc-950">
					My Shop
				</span>
			</Link>
			<SearchField />
			<ul className="flex items-center gap-4" role="navigation">
				<ActiveLink
					href={'/'}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline "
				>
					Home
				</ActiveLink>
				<ActiveLink
					href={'/products' as Route}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
					exact={false}
				>
					All
				</ActiveLink>

				<ActiveLink
					href={'/categories' as Route}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
					exact={false}
				>
					Categories
				</ActiveLink>

				<ActiveLink
					href={'/collections' as Route}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
					exact={false}
				>
					Collections
				</ActiveLink>
			</ul>
		</nav>
	);
};
