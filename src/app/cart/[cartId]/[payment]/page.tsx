import { getCartByFromCookies } from '@/api/carts';
import { PaymentStripeForm } from '@/components/organism/PaymentStripeForm';

export default async function PaymentPage() {
	const cart = await getCartByFromCookies();

	if (!cart?.orderItems?.length) {
		return <p>Your Shopping Basket Is Empty</p>;
	}
	return <PaymentStripeForm cart={cart} />;
}
