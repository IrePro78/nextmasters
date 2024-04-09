import { useFormStatus } from 'react-dom';

export async function OrderSummary() {
	const { pending } = useFormStatus();

	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between">
				<span className="text-md font-semibold">Subtotal</span>
				<span className="text-md font-semibold">
					{/* {formatCurrency(total)} */}
				</span>
			</div>
			<div className="flex justify-between">
				<span className="text-md font-semibold">Shipping</span>
				<span className="text-md font-semibold">Free</span>
			</div>
			<div className="flex justify-between">
				<span className="text-md font-semibold">Total</span>
				<span className="text-md font-semibold">
					{/* {formatCurrency(total)} */}
				</span>
			</div>
		</div>
	);
}
