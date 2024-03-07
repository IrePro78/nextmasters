export async function addToCartAction({
	productId,
	userId,
}: {
	productId: string;
	userId: string;
}) {
	console.log(productId);
	// const cart = await getOrCreateCart(userId);

	// if (!cart) {
	// 	throw new Error(
	// 		'Something went wrong with cart creation/check process.',
	// 	);
	// }

	// await addItemToCart(cart.id, selectedVariant.id).finally(() => {
	// 	revalidatePath('/cart');
	// 	redirect('/cart');
	// });
}

export const getOrCreateCart = async () => {
	console.log();

	return {};
};
