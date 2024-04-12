'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { handlePaymentAction } from '@/app/cart/actions';
import { CheckoutForm } from '@/components/organism/CheckoutForm';
import { OrderSummary } from '@/components/organism/OrderSummary';
import { type CartFragment } from '@/gql/graphql';

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
	throw new Error(
		'Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable',
	);
}
const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export const PaymentStripeForm = ({
	cart,
}: {
	cart: CartFragment;
}) => {
	const [clientSecret, setClientSecret] = useState<string>('');

	useEffect(() => {
		const fetchClientSecret = async () => {
			const secret = await handlePaymentAction();
			setClientSecret(secret);
		};

		fetchClientSecret().catch(console.error);
	}, []);

	return (
		<>
			<div className="container mx-auto mt-4 h-16 rounded-l-md rounded-r-md border-l border-r border-t border-slate-500 bg-slate-800 p-4 text-center text-xl">
				Order Summary
			</div>
			<div className="container mx-auto flex flex-row ">
				<div className="basis-1/2 rounded-l-md border border-slate-500 bg-slate-800 p-10">
					<OrderSummary cart={cart} />
				</div>
				<div className="basis-1/2 rounded-r-md border border-slate-500 bg-slate-800 p-10">
					{clientSecret && (
						<Elements
							key={clientSecret}
							options={{
								locale: 'en',
								appearance: {
									theme: 'night',
								},
								clientSecret,
							}}
							stripe={stripePromise}
						>
							<CheckoutForm />
						</Elements>
					)}
				</div>
			</div>
		</>
	);
};
