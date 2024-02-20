import { getProductsList } from '@/api/products';
import { Pagination } from '@/components/molecules/Pagination';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const products = await getProductsList();
	const numOfPages = Math.ceil(products.length / 4);

	return (
		<>
			<Pagination numOfPages={numOfPages} />
			<section>{children}</section>
		</>
	);
}
