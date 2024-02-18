import { getProductById } from '@/api/products';

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	console.log(product);

	return (
		<>
			<div>
				{/* // <SingleProduct product={product} /> */}
				<h1>{product.name}</h1>
			</div>
		</>
	);
}
