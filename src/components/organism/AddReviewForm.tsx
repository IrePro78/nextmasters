export const AddReviewForm = () => {
	// async function addReview(data: FormData) {
	// 	'use server';
	// console.log(data);
	// 	return null;
	// }

	return (
		<form className="mx-auto mt-16 max-w-md rounded bg-white p-4 shadow">
			<h2 className="mb-4 text-2xl font-bold">Feedback Form</h2>
			<div className="mb-4">
				<label htmlFor="name" className="mb-1 block">
					Name
				</label>
				{/* <input type="text" id="name" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> */}
			</div>
			<div className="mb-4">
				<label htmlFor="email" className="mb-1 block">
					Email
				</label>
				{/* <input type="email" id="email" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"> */}
			</div>
			<div className="mb-4">
				<label className="mb-1 block">Rating</label>
				{/* <div className="flex items-center space-x-2">
            <input type="radio" name="rating" id="rating1" value="1" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
            <label htmlFor="rating1">1</label>
            <input type="radio" name="rating" id="rating2" value="2" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
            <label htmlFor="rating2">2</label>
            <input type="radio" name="rating" id="rating3" value="3" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
            <label htmlFor="rating3">3</label>
            <input type="radio" name="rating" id="rating4" value="4" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
            <label htmlFor="rating4">4</label>
            <input type="radio" name="rating" id="rating5" value="5" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
            <label htmlFor="rating5">5</label>
        </div> */}
			</div>
			<div className="mb-4">
				<label htmlFor="message" className="mb-1 block">
					Message
				</label>
				<textarea
					id="message"
					className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
				></textarea>
			</div>
			<button
				type="submit"
				className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
				Submit
			</button>
		</form>
	);
};
