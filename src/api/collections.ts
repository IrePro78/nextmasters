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
	const graphqlResponse = await executeGraphQLQuery({
		query: CollectionsGetListDocument,
		variables: { take, skip },
	});
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
	const graphqlResponse = await executeGraphQLQuery({
		query: CollectionGetBySlugDocument,
		variables: { slug },

	});

	const collection = graphqlResponse.collectionBySlug;
	if (!collection) notFound();
	return {
		id: collection.id,
		name: collection.name,
	};
};
