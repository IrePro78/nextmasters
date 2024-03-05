import { type Route } from 'next';
import { getCategoriesList } from '@/api/categories';
import { ActiveLink } from '@/components/ActiveLink';

export default async function CategoriesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const categories = await getCategoriesList();
	return (
		<>
			<ul
				data-testid="categories-list"
				className="flex items-center justify-center gap-4"
				role="navigation"
			>
				{categories &&
					categories.map((category) => (
						<ActiveLink
							key={category.id}
							href={`/categories/${category.slug}` as Route}
							className="border-b-2 border-b-transparent text-lg"
							activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
							exact={false}
						>
							{category.name}
						</ActiveLink>
					))}
			</ul>

			<section>{children}</section>
		</>
	);
}
