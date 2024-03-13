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
				// formAction={async () => removeItemFromCartAction}
				value={itemId}
				className="text-slate-400"
				data-testid="remove"
				name="itemId"
				type="submit"
			>
				<X />
			</button>
		</form>
	);
};
