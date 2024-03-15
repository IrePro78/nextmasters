export const getReviewsByPoductId = async (productId: string) => {
	return executeGraphQLQuery({
		query: CartGetByIdDocument,
		variables: {
			productId,
		},
	});
};

export const createReview = async () => {
	return executeGraphQLQuery({
		query: CartCreateDocument,
		variables: {},
	});
};
