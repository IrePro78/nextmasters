'use client';
import { PaymentStripeForm } from '@/components/organism/PaymentStripeForm';
import { handlePaymentAction } from '@/app/cart/actions';

export default async function PaymentPage() {
	// if (!process.env.NEXT_STRIPE_SECRET_KEY) {
	// 	throw new Error('Missing Stripe secret key');
	// }
	// const cart = await getCartByFromCookies();
	// if (!cart) {
	// 	throw new Error('Cart not found');
	// }
	// const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY, {
	// 	apiVersion: '2023-10-16',
	// 	typescript: true,
	// });
	// const paymentIntent = await stripe.paymentIntents.create({
	// 	amount: cart.totalAmount * 100,
	// 	currency: 'usd',
	// 	automatic_payment_methods: {
	// 		enabled: true,
	// 	},
	// 	metadata: { orderId: cart.id },
	// });
	// if (!paymentIntent.client_secret) {
	// 	throw new Error('Could not create payment intent');
	// }
	const ggg = handlePaymentAction();

	return <PaymentStripeForm clientSecret={ggg} />;
}
