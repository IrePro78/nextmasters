/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    id\n    name\n    slug\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionsGetList($take: Int, $skip: Int) {\n  collections(take: $take, skip: $skip) {\n    id\n    name\n    slug\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    product_image\n    slug\n    price\n    categories {\n      id\n      name\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetByCategorySlug($slug: String!, $take: Int, $skip: Int) {\n  categoryBySlug(slug: $slug) {\n    products(take: $take, skip: $skip) {\n      id\n      name\n      description\n      product_image\n      slug\n      price\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!, $take: Int, $skip: Int) {\n  collectionBySlug(slug: $slug) {\n    products(take: $take, skip: $skip) {\n      id\n      name\n      description\n      product_image\n      slug\n      price\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    id\n    name\n    description\n    product_image\n    slug\n    price\n    categories {\n      id\n      name\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetByCategoryId($categoryId: ID!) {\n  categoryById(id: $categoryId) {\n    products {\n      id\n      name\n      description\n      product_image\n      slug\n      price\n    }\n  }\n}": types.ProductsGetByCategoryIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList($take: Int, $skip: Int) {\n  collections(take: $take, skip: $skip) {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    product_image\n    slug\n    price\n    categories {\n      id\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $take: Int, $skip: Int) {\n  categoryBySlug(slug: $slug) {\n    products(take: $take, skip: $skip) {\n      id\n      name\n      description\n      product_image\n      slug\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!, $take: Int, $skip: Int) {\n  collectionBySlug(slug: $slug) {\n    products(take: $take, skip: $skip) {\n      id\n      name\n      description\n      product_image\n      slug\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    id\n    name\n    description\n    product_image\n    slug\n    price\n    categories {\n      id\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategoryId($categoryId: ID!) {\n  categoryById(id: $categoryId) {\n    products {\n      id\n      name\n      description\n      product_image\n      slug\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
