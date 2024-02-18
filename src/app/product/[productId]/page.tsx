import { get } from 'http';

export default async function ProductPage({
	params,
}: {
	productId: string;
}) {
	const product = await get(`/api/products/${params.productId}`);

	return (
		<>
			<div className=" mx-auto min-h-full bg-zinc-400 p-12 text-zinc-900 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				<h1>Welcome to the Product Page</h1>
				<p>This is the content of the Product Page.</p>
			</div>
		</>
	);
}