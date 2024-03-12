import { redirect } from 'next/navigation';
import { getCartByFromCookies } from '@/api/carts';
import { ProductQuantitySelector } from '@/components/atoms/ProductQuantitySelector';

export default async function CartPage() {
	const cart = await getCartByFromCookies();

	if (!cart) {
		redirect('/');
	}
	return (
		// <div>
		// 	<pre>{JSON.stringify(cart, null, 2)}</pre>
		// </div>

		<div className="relative overflow-x-auto">
			<table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
				<thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Product name
						</th>
						<th scope="col" className="px-6 py-3">
							Color
						</th>
						<th scope="col" className="px-6 py-3">
							Quantity
						</th>
						<th scope="col" className="px-6 py-3">
							Price
						</th>
					</tr>
				</thead>
				<tbody>
					{/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
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
											{item.product[0]?.name}
										</th>
										<td className="px-6 py-4">{item.quantity}</td>
										<td className=" w-2 px-6 py-4">
											{
												<ProductQuantitySelector
													quantity={item.quantity}
													itemId={item.id}
												/>
											}
										</td>
										<td className="px-6 py-4">
											{item?.product[0]?.price}
										</td>
									</tr>
								),
						)}
				</tbody>
			</table>
		</div>
	);
}
