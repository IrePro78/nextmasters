import { type Metadata } from 'next';
import { getProductsByCategorySlug } from '@/api/products';
import { Pagination } from '@/components/molecules/Pagination';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Categories',
	};
}

export default async function CategoryLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { category: string };
}) {
	const products = await getProductsByCategorySlug(params.category);
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
				{'Categories'}
			</h1>
			{numOfPages > 1 && (
				<Pagination
					numOfPages={numOfPages}
					baseUrl={`categories/${params.category}`}
				/>
			)}
			<main className="mx-auto max-w-7xl first-letter:uppercase">
				{children}
			</main>
		</>
	);
}
