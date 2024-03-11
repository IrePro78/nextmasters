/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: unknown; output: unknown; }
};

export type Category = {
  /** Unique identifier of the category */
  id: Scalars['ID']['output'];
  /** Name of the category */
  name: Scalars['String']['output'];
  /** Get Products By Category */
  products?: Maybe<Array<Product>>;
  /** Slug of the category */
  slug: Scalars['String']['output'];
};


export type CategoryProductsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Collection = {
  /** Description of the collection */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the collection */
  id: Scalars['ID']['output'];
  /** Name of the collection */
  name: Scalars['String']['output'];
  /** Get Products By Collection */
  products?: Maybe<Array<Product>>;
  /** Slug of the collection */
  slug: Scalars['String']['output'];
};


export type CollectionProductsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

/** Create product input object type. */
export type CreateOrderInput = {
  totalAmount: Scalars['Float']['input'];
};

/** Create order item input object type. */
export type CreateOrderItemInput = {
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

/** Create product input object type. */
export type CreateProductInput = {
  category_id: Array<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  product_image: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type Mutation = {
  /** Create Order */
  createOrder?: Maybe<Order>;
  /** Create Order Item */
  createOrderItem?: Maybe<OrderItems>;
  /** Create Product */
  createProduct?: Maybe<Product>;
};


export type MutationCreateOrderArgs = {
  createOrderData: CreateOrderInput;
};


export type MutationCreateOrderItemArgs = {
  createOrderItemData: CreateOrderItemInput;
};


export type MutationCreateProductArgs = {
  createProductData: CreateProductInput;
};

export type Order = {
  /** Date of the order */
  createAt: Scalars['DateTime']['output'];
  /** Unique identifier of the order */
  id: Scalars['ID']['output'];
  /** Get Order Items By Order */
  orderItems?: Maybe<Array<OrderItems>>;
  /** Status of the order */
  status: Scalars['String']['output'];
  /** Total amount of the order */
  totalAmount: Scalars['Float']['output'];
  /** Date of the last update of the order */
  updateAt: Scalars['DateTime']['output'];
};

export type OrderItems = {
  /** Unique identifier of the order item */
  id: Scalars['ID']['output'];
  /** Get Order Items By Order */
  product?: Maybe<Array<Product>>;
  /** Quantity of the product */
  quantity: Scalars['Float']['output'];
};

export type Product = {
  /** Get Categories By Product */
  categories?: Maybe<Array<Category>>;
  /** Get Collections By Product */
  collections?: Maybe<Array<Collection>>;
  /** Description of the product */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier of the product */
  id: Scalars['ID']['output'];
  /** Name of the product */
  name: Scalars['String']['output'];
  /** Price of the product */
  price: Scalars['Float']['output'];
  /** Image of the product */
  product_image: Scalars['String']['output'];
  /** Slug of the product */
  slug: Scalars['String']['output'];
};

export type Query = {
  /** Get All Categories */
  categories?: Maybe<Array<Category>>;
  /** Get Category By ID */
  categoryById?: Maybe<Category>;
  /** Get Category By Slug */
  categoryBySlug?: Maybe<Category>;
  /** Get Collection By ID */
  collection?: Maybe<Collection>;
  /** Get Collection By Slug */
  collectionBySlug?: Maybe<Collection>;
  /** Get All Collections */
  collections?: Maybe<Array<Collection>>;
  /** Get Order By ID */
  order?: Maybe<Order>;
  /** Get All Orders */
  orders?: Maybe<Array<Order>>;
  /** Get Product By ID */
  product?: Maybe<Product>;
  /** Get All Products */
  products?: Maybe<Array<Product>>;
  /** Get Products By Name */
  productsByName?: Maybe<Array<Product>>;
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectionBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductsByNameArgs = {
  name: Scalars['String']['input'];
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type CartAddProductMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartAddProductMutation = { createOrderItem?: { id: string, quantity: number, product?: Array<{ id: string, name: string, price: number }> | null } | null };

export type CartCreateMutationVariables = Exact<{ [key: string]: never; }>;


export type CartCreateMutation = { createOrder?: { id: string, status: string, totalAmount: number, orderItems?: Array<{ id: string, quantity: number, product?: Array<{ id: string, name: string, price: number }> | null }> | null } | null };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { order?: { id: string, status: string, totalAmount: number, orderItems?: Array<{ id: string, quantity: number, product?: Array<{ id: string, name: string, price: number }> | null }> | null } | null };

export type CartFragment = { id: string, status: string, totalAmount: number, orderItems?: Array<{ id: string, quantity: number, product?: Array<{ id: string, name: string, price: number }> | null }> | null };

export type CategoriesGetListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoriesGetListQuery = { categories?: Array<{ id: string, name: string, slug: string }> | null };

export type CategoryGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoryGetBySlugQuery = { categoryBySlug?: { id: string, name: string } | null };

export type CollectionGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionGetBySlugQuery = { collectionBySlug?: { id: string, name: string } | null };

export type CollectionsGetListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CollectionsGetListQuery = { collections?: Array<{ id: string, name: string, slug: string }> | null };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description?: string | null, product_image: string, slug: string, price: number, categories?: Array<{ name: string, slug: string }> | null } | null };

export type ProductListItemFragment = { id: string, name: string, description?: string | null, product_image: string, slug: string, price: number, categories?: Array<{ name: string, slug: string }> | null };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetByCategorySlugQuery = { categoryBySlug?: { products?: Array<{ id: string, name: string, description?: string | null, product_image: string, slug: string, price: number, categories?: Array<{ name: string, slug: string }> | null }> | null } | null };

export type ProductsGetByCollectionSlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetByCollectionSlugQuery = { collectionBySlug?: { products?: Array<{ id: string, name: string, description?: string | null, product_image: string, slug: string, price: number, categories?: Array<{ name: string, slug: string }> | null }> | null } | null };

export type ProductsGetByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetByNameQuery = { productsByName?: Array<{ id: string, name: string, description?: string | null, product_image: string, slug: string, price: number, categories?: Array<{ name: string, slug: string }> | null }> | null };

export type ProductsGetListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { products?: Array<{ id: string, name: string, description?: string | null, product_image: string, slug: string, price: number, categories?: Array<{ name: string, slug: string }> | null }> | null };

export type ProductsGetByCategoryIdQueryVariables = Exact<{
  categoryId: Scalars['ID']['input'];
}>;


export type ProductsGetByCategoryIdQuery = { categoryById?: { products?: Array<{ id: string, name: string, description?: string | null, product_image: string, slug: string, price: number, categories?: Array<{ name: string, slug: string }> | null }> | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Order {
  id
  status
  totalAmount
  orderItems {
    id
    quantity
    product {
      id
      name
      price
    }
  }
}
    `, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  description
  product_image
  slug
  price
  categories {
    name
    slug
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const CartAddProductDocument = new TypedDocumentString(`
    mutation CartAddProduct($productId: ID!, $orderId: ID!, $quantity: Int!) {
  createOrderItem(
    createOrderItemData: {orderId: $orderId, productId: $productId, quantity: $quantity}
  ) {
    id
    quantity
    product {
      id
      name
      price
    }
  }
}
    `) as unknown as TypedDocumentString<CartAddProductMutation, CartAddProductMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate {
  createOrder(createOrderData: {totalAmount: 0}) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
  status
  totalAmount
  orderItems {
    id
    quantity
    product {
      id
      name
      price
    }
  }
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  order(id: $id) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
  status
  totalAmount
  orderItems {
    id
    quantity
    product {
      id
      name
      price
    }
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList($take: Int, $skip: Int) {
  categories(take: $take, skip: $skip) {
    id
    name
    slug
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CategoryGetBySlugDocument = new TypedDocumentString(`
    query CategoryGetBySlug($slug: String!) {
  categoryBySlug(slug: $slug) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<CategoryGetBySlugQuery, CategoryGetBySlugQueryVariables>;
export const CollectionGetBySlugDocument = new TypedDocumentString(`
    query CollectionGetBySlug($slug: String!) {
  collectionBySlug(slug: $slug) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<CollectionGetBySlugQuery, CollectionGetBySlugQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList($take: Int, $skip: Int) {
  collections(take: $take, skip: $skip) {
    id
    name
    slug
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  product_image
  slug
  price
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetByCategorySlug($slug: String!, $take: Int, $skip: Int) {
  categoryBySlug(slug: $slug) {
    products(take: $take, skip: $skip) {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  product_image
  slug
  price
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategorySlugQuery, ProductsGetByCategorySlugQueryVariables>;
export const ProductsGetByCollectionSlugDocument = new TypedDocumentString(`
    query ProductsGetByCollectionSlug($slug: String!, $take: Int, $skip: Int) {
  collectionBySlug(slug: $slug) {
    products(take: $take, skip: $skip) {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  product_image
  slug
  price
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetByCollectionSlugQuery, ProductsGetByCollectionSlugQueryVariables>;
export const ProductsGetByNameDocument = new TypedDocumentString(`
    query ProductsGetByName($name: String!, $take: Int, $skip: Int) {
  productsByName(name: $name, take: $take, skip: $skip) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  product_image
  slug
  price
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetByNameQuery, ProductsGetByNameQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int, $skip: Int) {
  products(take: $take, skip: $skip) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  product_image
  slug
  price
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetByCategoryIdDocument = new TypedDocumentString(`
    query ProductsGetByCategoryId($categoryId: ID!) {
  categoryById(id: $categoryId) {
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  product_image
  slug
  price
  categories {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategoryIdQuery, ProductsGetByCategoryIdQueryVariables>;