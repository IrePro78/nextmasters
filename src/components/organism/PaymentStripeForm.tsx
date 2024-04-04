'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from '@/components/organism/CheckoutForm';

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
	throw new Error(
		'Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable',
	);
}
const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export const PaymentStripeForm = ({
	clientSecret,
}: {
	clientSecret: string;
}) => {
	return (
		<Elements
			options={{ appearance: { theme: 'stripe' }, clientSecret }}
			stripe={stripePromise}
		>
			<CheckoutForm />
		</Elements>
	);
};
