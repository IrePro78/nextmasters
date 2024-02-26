export default async function CategoryLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { category: string };
}) {
	const products = await getProductsByCategoryId(params.category);
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
