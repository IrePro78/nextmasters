import { CategoriesGetListDocument } from '@/gql/graphql';
import { executeGraphQLQuery } from '@/lib/graphqlApi';

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
