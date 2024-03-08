export const AddToCartForm = async ({
	params,
}: {
	params: { productId: string };
}) => {
	console.log(params.productId);

	return (
		<form action={}>
			<button type="submit">Add to cart</button>
		</form>
	);
};
