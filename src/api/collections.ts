import { CollectionsGetListDocument } from '@/gql/graphql';
import { executeGraphQLQuery } from '@/lib/graphqlApi';

export const getCollectionsList = async (
	take?: number,
	skip?: number,
) => {
	const variables = { take, skip };

	const graphqlResponse = await executeGraphQLQuery(
		CollectionsGetListDocument,
		variables,
	);
	const categories = graphqlResponse.collections?.map(
		(collection) => {
			return {
				id: collection.id,
				name: collection.name,
				slug: collection.slug,
			};
		},
	);
	return categories;
};
