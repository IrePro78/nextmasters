if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
	throw new Error(
		'Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable',
	);
}

export const PaymentStripeForm = () => {};
