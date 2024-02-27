import { type Metadata } from 'next';
import { getProductsByCategorySlug } from '@/api/products';
import { Pagination } from '@/components/molecules/Pagination';

// export async function generateMetadata({
// 	params,
// }: {
// 	params: { category: string };
// }): Promise<Metadata> {

// 	return {
// 		title: params.category,
// 	};
// }

export default async function CategoryLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { category: string };
}) {
	console.log(params.category);

	const products = await getProductsByCategorySlug(params.category);
	if (!products) {
		throw new Error('No products found');
	}

	const numOfPages = Math.ceil(products.length / 3);
	return (
		<>
			<h1 className="mx-auto max-w-7xl pb-20 text-4xl font-extrabold first-letter:uppercase">
				{params.category}
			</h1>
			<main className="mx-auto max-w-7xl">{children}</main>
			<Pagination
				numOfPages={numOfPages}
				baseUrl={`categories/${params.category}`}
			/>
		</>
	);
}
