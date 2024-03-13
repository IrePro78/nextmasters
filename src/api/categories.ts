import { notFound } from 'next/navigation';
import {
	CategoriesGetListDocument,
	CategoryGetBySlugDocument,
} from '@/gql/graphql';
import { executeGraphQLQuery } from '@/lib/graphqlApi';

export const getCategoriesList = async (
	take?: number,
	skip?: number,
) => {
	const graphqlResponse = await executeGraphQLQuery({
		query: CategoriesGetListDocument,
		variables: { take, skip },
	});
	const categories = graphqlResponse.categories?.map((category) => {
		return {
			id: category.id,
			name: category.name,
			slug: category.slug,
		};
	});
	return categories;
};
export const getCategoryBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQLQuery({
		query: CategoryGetBySlugDocument,
		variables: { slug },
	});

	const category = graphqlResponse.categoryBySlug;

	if (!category) notFound();
	return {
		id: category.id,
		name: category.name,
	};
};
