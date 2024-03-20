import { type Metadata } from 'next';
import { ProductList } from '@/components/organism/ProductList';
import { getProductsList } from '@/api/products';

// export async function generateStaticParams() {
// 	const products = await getProductsList();
// 	if (!products) return [];

// 	const numOfPages = Math.ceil(products.length / 4);
// 	const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
// 	return pages.map((page) => ({ params: { page: page.toString() } }));
// }

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: 'Products',
		description: 'All the products',
	};
};

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { page: number };
	searchParams: { sort: string };
}) {
	const { page } = params;
	const { sort } = searchParams;
	const numOfProducts = 8;

	const pageNumber = page === 1 ? 0 : page - 1;
	const nextNumberOfProducts =
		page <= 1 ? pageNumber : pageNumber * numOfProducts;

	const products = await getProductsList(
		numOfProducts,
		nextNumberOfProducts,
		sort,
	);

	// let sortedProducts;

	// switch (sort) {
	// 	case 'price':
	// 		sortedProducts = products?.sort((a, b) => a.price - b.price);
	// 		break;
	// 	case 'name':
	// 		sortedProducts = products?.sort((a, b) =>
	// 			a.name.toUpperCase().localeCompare(b.name.toUpperCase()),
	// 		);
	// 		break;
	// 	case 'rating':
	// 		sortedProducts = products?.sort((a, b) => {
	// 			if (!a.reviews || !b.reviews) return 0;
	// 			const aAverageRating =
	// 				a.reviews?.reduce((acc, review) => acc + review.rating, 0) /
	// 					a.reviews?.length || 0;
	// 			const bAverageRating =
	// 				b.reviews?.reduce((acc, review) => acc + review.rating, 0) /
	// 					b.reviews?.length || 0;
	// 			return bAverageRating - aAverageRating;
	// 		});
	// 		break;
	// 	default:
	// 		sortedProducts = products?.sort(() => 0.5 - Math.random());
	// 		break;
	// }
	return (
		<>
			<main className="container mx-auto">
				<h1 className="py-4 text-center text-3xl">Products Page</h1>
				{products && <ProductList products={products} />}
			</main>
		</>
	);
}
