import {
	ProductAddReviewDocument,
	ProductGetReviewsByIdDocument,
} from '@/gql/graphql';
import { executeGraphQLQuery } from '@/lib/graphqlApi';

export const getReviewsByPoductId = async (productId: string) => {
	return executeGraphQLQuery({
		query: ProductGetReviewsByIdDocument,
		variables: {
			productId,
		},
	});
};

type FormDataProp = {
	productId: string;
	headline: string;
	content: string;
	name: string;
	email: string;
	rating: number;
};

export const createReview = async ({
	productId,
	headline,
	content,
	name,
	email,
	rating,
}: FormDataProp) => {
	return executeGraphQLQuery({
		query: ProductAddReviewDocument,
		variables: { productId, headline, content, name, email, rating },
		next: {
			tags: ['cart'],
		},
	});
};
