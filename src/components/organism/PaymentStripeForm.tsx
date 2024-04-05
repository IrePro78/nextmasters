'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { handlePaymentAction } from '@/app/cart/actions';
import { CheckoutForm } from '@/components/organism/CheckoutForm';

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
	throw new Error(
		'Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable',
	);
}
const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export const PaymentStripeForm = () => {
	const [clientSecret, setClientSecret] = useState<string>('');
	useEffect(() => {
		const fetchClientSecret = async () => {
			const secret = await handlePaymentAction();
			setClientSecret(secret);
		};

		fetchClientSecret().catch(console.error);
	}, []);

	return (
		<Elements
			options={{ appearance: { theme: 'stripe' }, clientSecret }}
			stripe={stripePromise}
		>
			<CheckoutForm />
		</Elements>
	);
};
