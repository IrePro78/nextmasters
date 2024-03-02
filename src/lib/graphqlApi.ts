import { type TypedDocumentString } from '@/gql/graphql';

export const executeGraphQLQuery = async <TResult, TVariables>(
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