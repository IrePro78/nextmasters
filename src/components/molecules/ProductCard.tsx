import { addToCartAction } from '@/app/cart/actions';
import { AddToCartButton } from '@/components/atoms/AddToCartButton';
import { ProductCoverImage } from '@/components/atoms/ProductCoverImage';
import { StarsRatingProduct } from '@/components/atoms/StarsRatingProduct';
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
			<div className="max-w-xl rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 ">
				<ProductCoverImage
					src={product.product_image}
					alt={product.name}
				/>

				<div className="px-4 pb-3 pt-3">
					<div>
						<h2 className=" text-md pb-2 text-start font-semibold tracking-tight text-gray-900 dark:text-white">
							{product.name}
						</h2>
					</div>

					<p className="w-full text-start text-sm font-light ">
						{product.description}
					</p>

					<StarsRatingProduct productReviews={product.reviews} />
					<div className="flex items-center justify-between">
						<span className="text-xl font-semibold text-gray-900 dark:text-white">
							{product.price && formatMoney(product.price)}
						</span>

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
