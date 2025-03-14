import Link from 'next/link';
import { type Route } from 'next';
import { ShoppingCart } from 'lucide-react';
import { ActiveLink } from '@/components/ActiveLink';
import { SearchField } from '@/components/atoms/SearchField';
import { getCartByFromCookies } from '@/api/carts';

import { getCollectionsList } from '@/api/collections';
import { getCategoriesList } from '@/api/categories';

export const Navbar = async () => {
	const cart = await getCartByFromCookies();
	const categories = await getCategoriesList();
	const collections = await getCollectionsList();
	return (
		<nav
			role="navigation"
			className=" sticky top-0 z-10 mx-auto flex justify-center gap-4 border-b border-slate-600 bg-slate-900 bg-opacity-60 p-6 py-6 backdrop-blur-sm"
		>
			{/* <Link href={'/'}>
				<span className=" flex-grow-0 p-2 text-3xl font-semibold text-slate-200">
					My Shop
				</span>
			</Link> */}
			<div className="mx-auto">
				<SearchField />
			</div>

			<ul className="flex items-center gap-4">
				<ActiveLink
					href={'/'}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-fuchsia-100  bg-slate-800 text-lg font-semibold underline "
				>
					Home
				</ActiveLink>
				<ActiveLink
					href={'/products' as Route}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-fuchsia-100  bg-slate-800 text-lg font-semibold underline"
					exact={false}
				>
					All
				</ActiveLink>

				<ActiveLink
					href={
						`/collections/${collections && collections[0]?.slug}` as Route
					}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-fuchsia-100  bg-slate-800 text-lg font-semibold underline"
					exact={false}
				>
					Collections
				</ActiveLink>

				<ActiveLink
					href={
						`/categories/${categories && categories[0]?.slug}` as Route
					}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-fuchsia-100  bg-slate-800 text-lg font-semibold underline"
					exact={false}
				>
					Categories
				</ActiveLink>

				<Link href={`/cart/${cart?.id}` as Route} role="button">
					<div className="flex grid-cols-1 gap-1">
						<ShoppingCart />

						{cart?.orderItems?.reduce(
							(acc, curr) => acc + curr.quantity,
							0,
						) ?? 0}
					</div>
				</Link>
			</ul>
		</nav>
	);
};
