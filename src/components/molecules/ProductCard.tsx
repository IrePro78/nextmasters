import { addToCartAction } from '@/app/cart/actions';
import { AddReviewButton } from '@/components/atoms/AddReviewButton';
import { AddToCartButton } from '@/components/atoms/AddToCartButton';
import { ProductCoverImage } from '@/components/atoms/ProductCoverImage';
import { type ProductListItemFragment } from '@/gql/graphql';
import { formatMoney } from '@/utils/formater';

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductCard = async ({
	product,
}: ProductListItemProps) => {
	return (
		<>
			<div className="w-full max-w-xl rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 ">
				<ProductCoverImage
					src={product.product_image}
					alt={product.name}
				/>

				<div className="px-4 pb-3 pt-3">
					<div>
						<h2 className="text-md text-start font-semibold tracking-tight text-gray-900 dark:text-white">
							{product.name}
						</h2>
						<p className="w-32 text-start text-sm ">
							{product.description}
						</p>
					</div>

					<div className="mb-5 mt-2.5 flex items-center">
						<span className="text-md pr-2 font-semibold text-slate-200 ">
							5.0
						</span>
						<div className="flex items-center space-x-1 rtl:space-x-reverse">
							<svg
								className="h-4 w-4 text-yellow-300"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
							<svg
								className="h-4 w-4 text-yellow-300"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
							<svg
								className="h-4 w-4 text-yellow-300"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
							<svg
								className="h-4 w-4  dark:text-gray-600"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
							<svg
								className="h-4 w-4  dark:text-gray-600"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
						</div>

						<a
							href="#"
							className="pl-4 text-sm font-normal text-gray-900 underline hover:no-underline dark:text-white"
						>
							73 reviews
						</a>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-xl font-semibold text-gray-900 dark:text-white">
							{product.price && formatMoney(product.price)}
						</span>

						<AddReviewButton />

						<form action={addToCartAction}>
							<input
								type="hidden"
								value={product.id}
								name="productId"
							/>
							{/* <div
								className="ml-5 flex justify-between gap-4"
								
							> */}
							{/* <ProductQuantitySelector /> */}
							<AddToCartButton />
							{/* </div> */}
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
