import { addReviewAction } from '@/app/product/[productId]/actions';
import { AddReviewButton } from '@/components/atoms/AddReviewButton';

export const AddReviewForm = ({
	productId,
}: {
	productId: string;
}) => {
	return (
		<form action={addReviewAction} data-testid="add-review-form">
			<input type="hidden" name="productId" value={productId}></input>
			<input
				required
				type="text"
				name="headline"
				placeholder="Headline"
				className="mb-3 w-full rounded border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
			></input>
			<textarea
				name="content"
				rows={5}
				cols={33}
				placeholder="Content"
				className="mb-2 w-full rounded border border-gray-300 px-4 py-2  text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
			></textarea>
			<input
				required
				type="text"
				name="name"
				placeholder="Username"
				className="mb-3 w-full rounded border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
			></input>
			<input
				required
				type="email"
				name="email"
				placeholder="Email"
				className="w-full rounded border border-gray-300 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
			></input>

			<div className="mb-4 mt-4">
				<label className="mb-1 flex gap-2">
					Rating
					{Array.from({ length: 5 }).map((_, index) => (
						<svg
							key={index}
							className="h-6 w-6 text-yellow-500"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					))}
				</label>
				<div
					className="ml-14 flex items-center space-x-1.5"
					aria-required="true"
				>
					<input
						type="radio"
						name="rating"
						id="rating1"
						value="1"
						defaultChecked
						required
						className="focus:outline-none focus:ring-2 focus:ring-blue-500"
					></input>
					<label htmlFor="rating1">1</label>
					<input
						type="radio"
						name="rating"
						id="rating2"
						value="2"
						className="focus:outline-none focus:ring-2 focus:ring-blue-500"
					></input>
					<label htmlFor="rating2">2</label>
					<input
						type="radio"
						name="rating"
						id="rating3"
						value="3"
						className="focus:outline-none focus:ring-2 focus:ring-blue-500"
					></input>
					<label htmlFor="rating3">3</label>
					<input
						type="radio"
						name="rating"
						id="rating4"
						value="4"
						className="focus:outline-none focus:ring-2 focus:ring-blue-500"
					></input>
					<label htmlFor="rating4">4</label>
					<input
						type="radio"
						name="rating"
						id="rating5"
						value="5"
						className="focus:outline-none focus:ring-2 focus:ring-blue-500"
					></input>
					<label htmlFor="rating5">5</label>
				</div>
			</div>
			<AddReviewButton />
		</form>
	);
};
