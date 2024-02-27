import { getProductsList } from '@/api/products';
import { Pagination } from '@/components/molecules/Pagination';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const products = await getProductsList();
	if (!products) {
		throw new Error('No products found');
	}
	const numOfPages = Math.ceil(products.length / 3);

	return (
		<>
			<Pagination numOfPages={numOfPages} baseUrl={`products`} />
			<section>{children}</section>
		</>
	);
}
