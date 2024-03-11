import Link from 'next/link';
import { type Route } from 'next';
import { ShoppingCart } from 'lucide-react';
import { ActiveLink } from '@/components/ActiveLink';
import { SearchField } from '@/components/atoms/SearchField';
import { getCartByFromCookies } from '@/api/carts';

export const Navbar = async () => {
	const cart = await getCartByFromCookies();
	return (
		<nav className=" mx-auto flex justify-center gap-4 p-6 py-6 dark:bg-slate-800">
			{/* <Link href={'/'}>
				<span className=" flex-grow-0 p-2 text-3xl font-semibold text-slate-200">
					My Shop
				</span>
			</Link> */}
			<div className="mx-auto">
				<SearchField />
			</div>

			<ul className="flex items-center gap-4" role="navigation">
				<ActiveLink
					href={'/'}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-fuchsia-100  bg-zinc-800 text-lg font-semibold underline "
				>
					Home
				</ActiveLink>
				<ActiveLink
					href={'/products' as Route}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-fuchsia-100  bg-zinc-800 text-lg font-semibold underline"
					exact={false}
				>
					All
				</ActiveLink>

				<ActiveLink
					href={'/collections/elegant-extras' as Route}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-fuchsia-100  bg-zinc-800 text-lg font-semibold underline"
					exact={false}
				>
					Collections
				</ActiveLink>

				<ActiveLink
					href={'/categories/accessories' as Route}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-fuchsia-100  bg-zinc-800 text-lg font-semibold underline"
					exact={false}
				>
					Categories
				</ActiveLink>

				<Link href={'/'}>
					<div className="flex grid-cols-1 gap-1">
						<ShoppingCart />
						{cart?.orderItems?.length}
					</div>
				</Link>
			</ul>
		</nav>
	);
};
