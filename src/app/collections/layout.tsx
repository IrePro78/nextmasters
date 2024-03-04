import { type Route } from 'next';
import { getCollectionsList } from '@/api/collections';
import { ActiveLink } from '@/components/ActiveLink';

export default async function CollectionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const collections = await getCollectionsList();
	return (
		<>
			<ul
				className="flex items-center justify-center gap-4"
				role="navigation"
			>
				{collections &&
					collections.map((collection) => (
						<ActiveLink
							key={collection.id}
							href={`/collections/${collection.slug}` as Route}
							className="border-b-2 border-b-transparent text-lg"
							activeClassName="border-b-2 border-zinc-900 text-lg font-semibold underline"
							exact={false}
						>
							{collection.name}
						</ActiveLink>
					))}
			</ul>

			<section>{children}</section>
		</>
	);
}
