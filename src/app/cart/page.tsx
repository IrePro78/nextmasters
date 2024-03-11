import { redirect } from 'next/navigation';
import { getCartByFromCookies } from '@/api/carts';

export default async function CartPage() {
	const cart = await getCartByFromCookies();
	console.log('cart', cart);

	if (!cart) {
		redirect('/');
	}
	return (
		<div>
			<pre>{JSON.stringify(cart, null, 2)}</pre>
		</div>
	);
}
