import {
	CategoriesGetListDocument,
	type TypedDocumentString,
} from '@/gql/graphql';

const executeGraphQLQuery = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_API_URL)
		throw new Error('GRAPHQL_API_URL is not defined');
	const res = await fetch(process.env.GRAPHQL_API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphQLResponse =
		(await res.json()) as GraphQLResponse<TResult>;
	if (graphQLResponse.errors) {
		throw TypeError('GraphQL query error', {
			cause: graphQLResponse.errors,
		});
	}
	return graphQLResponse.data;
};

export const getCategoriesList = async (
	take?: number,
	skip?: number,
) => {
	const variables = { take, skip };

	const graphqlResponse = await executeGraphQLQuery(
		CategoriesGetListDocument,
		variables,
	);
	const categories = graphqlResponse.categories?.map((category) => {
		return {
			id: category.id,
			name: category.name,
			slug: category.slug,
		};
	});
	return categories;
};
