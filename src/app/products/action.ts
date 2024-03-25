// import { getProductsList } from '@/api/products';

// export const sortProducts = async (sortType: string) => {
// 	const products = await getProductsList();

// 	let sortedProducts;

// 	switch (sortType) {
// 		case 'price':
// 			sortedProducts = products?.sort((a, b) => a.price - b.price);
// 			break;
// 		case 'name':
// 			sortedProducts = products?.sort((a, b) =>
// 				a.name.toUpperCase().localeCompare(b.name.toUpperCase()),
// 			);
// 			break;
// 		case 'rating':
// 			sortedProducts = products?.sort((a, b) => {
// 				if (!a.reviews || !b.reviews) return 0;
// 				const aAverageRating =
// 					a.reviews?.reduce((acc, review) => acc + review.rating, 0) /
// 						a.reviews?.length || 0;
// 				const bAverageRating =
// 					b.reviews?.reduce((acc, review) => acc + review.rating, 0) /
// 						b.reviews?.length || 0;
// 				return bAverageRating - aAverageRating;
// 			});
// 			break;
// 		default:
// 			sortedProducts = products?.sort(() => 0.5 - Math.random());
// 			break;
// 	}
// 	return sortedProducts;
// };
