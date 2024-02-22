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
};

export type Category = {
  /** Unique identifier of the category */
  id: Scalars['ID']['output'];
  /** Name of the category */
  name: Scalars['String']['output'];
  /** Get Products By Category */
  products?: Maybe<Array<Product>>;
};

/** Create product input object type. */
export type CreateProductInput = {
  category_id: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  product_image: Scalars['String']['input'];
};

export type Mutation = {
  /** Create Product */
  createProduct?: Maybe<Product>;
};


export type MutationCreateProductArgs = {
  createProductData: CreateProductInput;
};

export type Product = {
  /** Get Categories By Product */
  categories?: Maybe<Array<Category>>;
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
};

export type Query = {
  /** Get All Categories */
  getCategories?: Maybe<Array<Category>>;
  /** Get Product By ID */
  getProduct?: Maybe<Product>;
  /** Get All Products */
  getProducts?: Maybe<Array<Product>>;
};


export type QueryGetProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProductsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type ProductsGetListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { getProducts?: Array<{ id: string, name: string, description?: string | null, product_image: string, price: number }> | null };

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

export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int, $skip: Int) {
  getProducts(take: $take, skip: $skip) {
    id
    name
    description
    product_image
    price
  }
}
    `) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;