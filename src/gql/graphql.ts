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
  /** Slug of the category */
  slug: Scalars['String']['output'];
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
  /** Create Product */
  createProduct?: Maybe<Product>;
};


export type MutationCreateProductArgs = {
  createProductData: CreateProductInput;
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
  /** Get Category By ID */
  categoryBySlug?: Maybe<Category>;
  /** Get Collection By ID */
  collection?: Maybe<Collection>;
  /** Get All Collections */
  collections?: Maybe<Array<Collection>>;
  /** Get Product By ID */
  product?: Maybe<Product>;
  /** Get All Products */
  products?: Maybe<Array<Product>>;
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


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type CategoriesGetListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoriesGetListQuery = { categories?: Array<{ id: string, name: string, slug: string }> | null };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description?: string | null, product_image: string, slug: string, price: number, categories?: Array<{ id: string, name: string }> | null } | null };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCategorySlugQuery = { categoryBySlug?: { products?: Array<{ id: string, name: string, description?: string | null, product_image: string, slug: string, price: number }> | null } | null };

export type ProductsGetListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { products?: Array<{ id: string, name: string, description?: string | null, product_image: string, slug: string, price: number, categories?: Array<{ id: string, name: string }> | null }> | null };

export type ProductsGetByCategoryIdQueryVariables = Exact<{
  categoryId: Scalars['ID']['input'];
}>;


export type ProductsGetByCategoryIdQuery = { categoryById?: { products?: Array<{ id: string, name: string, description?: string | null, product_image: string, slug: string, price: number }> | null } | null };

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

export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList($take: Int, $skip: Int) {
  categories(take: $take, skip: $skip) {
    id
    name
    slug
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    id
    name
    description
    product_image
    slug
    price
    categories {
      id
      name
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetByCategorySlug($slug: String!) {
  categoryBySlug(slug: $slug) {
    products {
      id
      name
      description
      product_image
      slug
      price
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetByCategorySlugQuery, ProductsGetByCategorySlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int, $skip: Int) {
  products(take: $take, skip: $skip) {
    id
    name
    description
    product_image
    slug
    price
    categories {
      id
      name
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetByCategoryIdDocument = new TypedDocumentString(`
    query ProductsGetByCategoryId($categoryId: ID!) {
  categoryById(id: $categoryId) {
    products {
      id
      name
      description
      product_image
      slug
      price
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetByCategoryIdQuery, ProductsGetByCategoryIdQueryVariables>;