import { getProductsList } from '@/api/products';
import { ProductSortingSelect } from '@/components/atoms/ProductSortingSelect';
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
	const numOfPages = Math.ceil(products.length / 8);

	return (
		<>
			<div className="mx-auto">
				{numOfPages > 1 && (
					<Pagination numOfPages={numOfPages} baseUrl={`products`} />
				)}
			</div>
			<section className=" container mx-auto flex flex-row-reverse items-center">
				<ProductSortingSelect />
				<label className="  pr-2 text-gray-400">Sort by:</label>
			</section>

			<section>{children}</section>
		</>
	);
}
