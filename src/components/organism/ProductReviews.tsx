import { getReviewsByPoductId } from '@/api/reviews';
import { AddReviewForm } from '@/components/organism/AddReviewForm';
import { formatDate } from '@/utils/formater';

export const ProductReviews = async ({
	productId,
}: {
	productId: string;
}) => {
	const reviews = await getReviewsByPoductId(productId);

	if (!reviews) {
		throw new Error('No reviews found');
	}
	return (
		<>
			<section className="py-14 ">
				<h2 className="mb-8 text-center text-3xl font-bold leading-[3.25rem] text-slate-200 lg:text-center">
					Customers Reviews
				</h2>
				<div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
					<div className="mx-auto flex max-w-sm flex-wrap items-start justify-center gap-y-4 sm:max-w-2xl md:flex-wrap lg:max-w-full lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 ">
						<div className="w-full lg:w-2/6">
							<AddReviewForm productId={productId} />
						</div>

						<div className="w-full lg:w-3/5 ">
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-4">
								<a id="reviews">
									{reviews &&
										reviews.getProductReviews?.map((review) => (
											<div
												key={review.id}
												className="max-sm:mx-automax-sm:hidden group rounded-md border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-slate-800 max-sm:max-w-sm"
											>
												<div className="mb-2">
													<div className="flex justify-between">
														<div>
															<h5 className="font-medium text-gray-900 transition-all duration-500">
																{review.name}
															</h5>
														</div>

														<div>
															<h1 className="font-sans text-gray-900 transition-all duration-500 ">
																{formatDate(
																	review?.createAt as string,
																)}
															</h1>
														</div>
													</div>
												</div>
												<div className="mb-5 flex items-center gap-1 text-amber-500 transition-all duration-500 sm:mb-3  ">
													{Array.from({ length: review.rating }).map(
														(_, i) => (
															<svg
																className="h-5 w-5"
																key={i}
																viewBox="0 0 18 17"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
																	fill="currentColor"
																></path>
															</svg>
														),
													)}
												</div>
												<p className="text-sm leading-6 text-gray-500 transition-all duration-500  group-hover:text-gray-800">
													{review?.content}
												</p>
											</div>
										))}
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
