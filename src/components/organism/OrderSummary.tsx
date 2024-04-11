import { ProductThumbnailImage } from '@/components/atoms/ProductThumbnailImage copy';
import { type CartFragment } from '@/gql/graphql';
import { formatMoney } from '@/utils/formater';

export function OrderSummary({ cart }: { cart: CartFragment }) {
	return (
		<>
			<table className="mt-4 w-full text-left text-sm rtl:text-right">
				<thead className=" h-6 border-b border-slate-500 bg-slate-800 text-xs uppercase text-gray-500 ">
					<tr>
						<th scope="col" className="px-6"></th>
						<th scope="col" className="px-6 ">
							product
						</th>
						<th scope="col" className="px-6">
							qty
						</th>
						<th scope="col" className="text-end">
							price
						</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems?.map(
						(item) =>
							item.product && (
								<tr
									className=" border-b border-slate-600 bg-slate-800  dark:text-gray-300"
									key={item.id}
								>
									<td className="max-w-12 py-2">
										<ProductThumbnailImage
											src={
												item.product.map((p) => p.product_image)[0] ||
												''
											}
											alt={''}
										/>
									</td>
									<td className="px-3 py-3">
										{item.product?.length && item.product[0]?.name}
									</td>
									<td className="px-8 py-3">
										{item.product?.length && item.quantity}
									</td>

									<td className=" py-3 text-end">
										{formatMoney(item.total)}
									</td>
								</tr>
							),
					)}
				</tbody>
			</table>

			<div className="mt-2 flex justify-between pt-2">
				<span className="text-md font-normal">Subtotal</span>
				<span className="text-md font-light">
					{formatMoney(cart.totalAmount * 0.88)}
				</span>
			</div>
			<div className="flex justify-between">
				<span className="text-md font-normal">Taxes</span>
				<span className="text-md font-light">
					{formatMoney(cart.totalAmount * 0.12)}
				</span>
			</div>
			<div className="flex justify-between">
				<span className="text-md font-normal">Shipping</span>
				<span className="text-md font-light">Free</span>
			</div>
			<div className="mt-4 flex justify-between border-t border-slate-500 pt-2">
				<span className="text-md font-semibold">Total</span>
				<span className="text-md font-light">
					{formatMoney(cart.totalAmount)}
				</span>
			</div>
		</>
	);
}
