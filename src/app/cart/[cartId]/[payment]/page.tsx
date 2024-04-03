import { getCartByFromCookies } from '@/api/carts';

export default async function PaymentPage() {
	const cart = await getCartByFromCookies();
	return (
		<>
			<p>{JSON.stringify(cart, null, 4)}</p>
		</>
	);
}
