import React, { useEffect, useState } from 'react';
import {
	PaymentElement,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js';
import { AddToPaymentButton } from '@/components/atoms/AddToPaymentButton';
import '../../styles/stripe.css';

export function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();

	const [message, setMessage] = useState<string | null>(null);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(
			window.location.search,
		).get('payment_intent_client_secret');

		if (!clientSecret) {
			return;
		}

		stripe
			.retrievePaymentIntent(clientSecret)
			.then(({ paymentIntent }) => {
				switch (paymentIntent?.status) {
					case 'succeeded':
						setMessage('Payment succeeded!');
						break;
					case 'processing':
						setMessage('Your payment is processing.');
						break;
					case 'requires_payment_method':
						setMessage(
							'Your payment was not successful, please try again.',
						);
						break;
					default:
						setMessage('Something went wrong.');
						break;
				}
			})
			.catch(console.error);
	}, [stripe]);

	const handleSubmit = async () => {
		if (!stripe || !elements) {
			return;
		}

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: 'http://localhost:3000/',
			},
		});

		if (
			error.type === 'card_error' ||
			error.type === 'validation_error'
		) {
			setMessage(error.message ?? 'Something went wrong.');
		} else {
			setMessage('An unexpected error occurred.');
		}
	};

	const paymentElementOptions = {
		layout: 'tabs',
	} as const;

	return (
		<div className="mx-auto">
			<form id="payment-form" action={handleSubmit}>
				<PaymentElement
					id="payment-element"
					options={paymentElementOptions}
					className="w-full max-w-xl rounded-md bg-gray-800 p-4"
				/>
				<AddToPaymentButton />
				{/* Show any error or success messages */}
				{message && <div id="payment-message">{message}</div>}
			</form>
		</div>
	);
}
