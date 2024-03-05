import { type Metadata } from 'next';
import { Pagination } from '@/components/molecules/Pagination';
import { getProductsByCollectionSlug } from '@/api/products';
import { getCollectionBySlug } from '@/api/collections';

export async function generateMetadata({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> {
	const collection = await getCollectionBySlug(params.collection);

	return {
		title: 'Collections',
	};
}

export default async function CollectionLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { collection: string };
}) {
	const products = await getProductsByCollectionSlug(
		params.collection,
	);
	if (!products) {
		throw new Error('No products found');
	}

	const numOfPages = Math.ceil(products.length / 4);
	return (
		<>
			<h1
				className="mx-auto max-w-7xl pb-20 text-center text-4xl first-letter:uppercase"
				role="heading"
			>
				{'Collections'}
			</h1>
			{numOfPages > 1 && (
				<Pagination
					numOfPages={numOfPages}
					baseUrl={`collections/${params.collection}`}
				/>
			)}
			<main className="mx-auto max-w-7xl first-letter:uppercase">
				{children}
			</main>
		</>
	);
}
