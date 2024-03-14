import { X } from 'lucide-react';

import { removeItemFromCartAction } from '@/app/cart/actions';

export const RemoveItemFromCart = async ({
	itemId,
}: {
	itemId: string;
}) => {
	return (
		<form action={removeItemFromCartAction}>
			<button
				value={itemId}
				className=" text-red-400"
				data-testid="remove"
				name="itemId"
				type="submit"
			>
				<X size={18} />
			</button>
		</form>
	);
};
