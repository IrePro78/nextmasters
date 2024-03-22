import { ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import { getCartByFromCookies } from '@/api/carts';
import { ProductQuantitySelector } from '@/components/atoms/ProductQuantitySelector';
import { RemoveItemFromCart } from '@/components/atoms/RemoveItemFromCart';

export default async function CartPage() {
	const cart = await getCartByFromCookies();

	return (
		<>
			<div className="container mx-auto my-5">
				<ShoppingBasket className="mx-auto h-12 w-12" />
			</div>

			{!cart?.orderItems?.length ? (
				<p className="my-5 text-center">
					You Shopping Basket Is Empty
				</p>
			) : (
				<table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
					<thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Product name
							</th>
							<th scope="col" className="px-7 py-3">
								Size
							</th>
							<th scope="col" className="px-6 py-3">
								Quantity
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
							<th scope="col" className="px-6 py-3">
								Total
							</th>
							<th scope="col" className="px-6 py-3 ">
								Remove
							</th>
						</tr>
					</thead>

					<tbody>
						{cart.orderItems?.length &&
							cart.orderItems.map(
								(item) =>
									item.product && (
										<tr
											key={item.id}
											className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
										>
											<th
												scope="row"
												className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
											>
												<Link
													href={`/product/${item.product[0]?.id}`}
												>
													{item.product[0]?.name}
												</Link>
											</th>
											<td className="px-6 py-4">{'Regular'}</td>
											<td className=" w-2 px-5 py-4">
												{
													<ProductQuantitySelector
														quantity={item.quantity}
														itemId={item.id}
													/>
												}
											</td>
											<td className="px-6 py-4">
												{`$${item?.product[0]?.price}`}
											</td>
											<td className="px-6 py-4">
												{`$${item.total.toFixed(2)}`}
											</td>
											<td className="px-10 py-4">
												<RemoveItemFromCart itemId={item.id} />
											</td>
										</tr>
									),
							)}
					</tbody>
				</table>
			)}
		</>
	);
}
