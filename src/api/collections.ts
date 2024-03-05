import { notFound } from 'next/navigation';
import {
	CollectionGetBySlugDocument,
	CollectionsGetListDocument,
} from '@/gql/graphql';
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
	const collections = graphqlResponse.collections?.map(
		(collection) => {
			return {
				id: collection.id,
				name: collection.name,
				slug: collection.slug,
			};
		},
	);
	return collections;
};

export const getCollectionBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQLQuery(
		CollectionGetBySlugDocument,
		{ slug },
	);

	const collection = graphqlResponse.collectionBySlug;
	if (!collection) notFound();
	return {
		id: collection.id,
		name: collection.name,
	};
};
