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
    "mutation CartAddProduct($productId: ID!, $orderId: ID!, $quantity: Int!, $total: Float!) {\n  createOrderItem(\n    createOrderItemData: {orderId: $orderId, productId: $productId, quantity: $quantity, total: $total}\n  ) {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n    }\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate($totalAmount: Float!) {\n  createOrder(createOrderData: {totalAmount: $totalAmount}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(id: $id) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  status\n  totalAmount\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      price\n      product_image\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveItem($itemId: ID!) {\n  removeOrderItem(itemId: $itemId) {\n    id\n  }\n}": types.CartRemoveItemDocument,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(updateOrderItemData: {itemId: $itemId, quantity: $quantity}) {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      price\n    }\n  }\n}": types.CartSetProductQuantityDocument,
    "query CategoriesGetList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    id\n    name\n    slug\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetBySlug($slug: String!) {\n  categoryBySlug(slug: $slug) {\n    id\n    name\n  }\n}": types.CategoryGetBySlugDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collectionBySlug(slug: $slug) {\n    id\n    name\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionsGetList($take: Int, $skip: Int) {\n  collections(take: $take, skip: $skip) {\n    id\n    name\n    slug\n  }\n}": types.CollectionsGetListDocument,
    "mutation ProductAddReview($productId: ID!, $headline: String!, $content: String!, $name: String!, $email: String!, $rating: Int!) {\n  createProductReview(\n    createReviewData: {productId: $productId, headline: $headline, content: $content, name: $name, email: $email, rating: $rating}\n  ) {\n    id\n    headline\n    content\n    rating\n    name\n    email\n    createAt\n  }\n}": types.ProductAddReviewDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetReviewsById($productId: ID!) {\n  getProductReviews(productId: $productId) {\n    id\n    headline\n    content\n    rating\n    name\n    email\n    createAt\n  }\n}": types.ProductGetReviewsByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  product_image\n  slug\n  price\n  categories {\n    name\n    slug\n  }\n  reviews {\n    id\n    headline\n    content\n    name\n    email\n    rating\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!, $take: Int, $skip: Int) {\n  categoryBySlug(slug: $slug) {\n    products(take: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!, $take: Int, $skip: Int) {\n  collectionBySlug(slug: $slug) {\n    products(take: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetByName($name: String!, $take: Int, $skip: Int) {\n  productsByName(name: $name, take: $take, skip: $skip) {\n    ...ProductListItem\n  }\n}": types.ProductsGetByNameDocument,
    "query ProductsGetList($take: Int, $skip: Int, $sort: String) {\n  products(take: $take, skip: $skip, sort: $sort) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetByCategoryId($categoryId: ID!) {\n  categoryById(id: $categoryId) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategoryIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($productId: ID!, $orderId: ID!, $quantity: Int!, $total: Float!) {\n  createOrderItem(\n    createOrderItemData: {orderId: $orderId, productId: $productId, quantity: $quantity, total: $total}\n  ) {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n    }\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($totalAmount: Float!) {\n  createOrder(createOrderData: {totalAmount: $totalAmount}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(id: $id) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  status\n  totalAmount\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      price\n      product_image\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($itemId: ID!) {\n  removeOrderItem(itemId: $itemId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(updateOrderItemData: {itemId: $itemId, quantity: $quantity}) {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      price\n    }\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  categoryBySlug(slug: $slug) {\n    id\n    name\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collectionBySlug(slug: $slug) {\n    id\n    name\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList($take: Int, $skip: Int) {\n  collections(take: $take, skip: $skip) {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductAddReview($productId: ID!, $headline: String!, $content: String!, $name: String!, $email: String!, $rating: Int!) {\n  createProductReview(\n    createReviewData: {productId: $productId, headline: $headline, content: $content, name: $name, email: $email, rating: $rating}\n  ) {\n    id\n    headline\n    content\n    rating\n    name\n    email\n    createAt\n  }\n}"): typeof import('./graphql').ProductAddReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetReviewsById($productId: ID!) {\n  getProductReviews(productId: $productId) {\n    id\n    headline\n    content\n    rating\n    name\n    email\n    createAt\n  }\n}"): typeof import('./graphql').ProductGetReviewsByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  product_image\n  slug\n  price\n  categories {\n    name\n    slug\n  }\n  reviews {\n    id\n    headline\n    content\n    name\n    email\n    rating\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $take: Int, $skip: Int) {\n  categoryBySlug(slug: $slug) {\n    products(take: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!, $take: Int, $skip: Int) {\n  collectionBySlug(slug: $slug) {\n    products(take: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByName($name: String!, $take: Int, $skip: Int) {\n  productsByName(name: $name, take: $take, skip: $skip) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int, $sort: String) {\n  products(take: $take, skip: $skip, sort: $sort) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategoryId($categoryId: ID!) {\n  categoryById(id: $categoryId) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
