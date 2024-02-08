import Image from 'next/image';

export default function Home() {
	return (
		<section className="mx-auto max-w-md bg-slate-400 p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ul className="gap--8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<li>
					<article>
						<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
							<Image
								width={320}
								height={320}
								src="/image/Laptop_1.png"
								alt="Acer"
								className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
							/>
						</div>
						<div className="mt-2 flex justify-between">
							<div>
								<h3 className="text-sm font-semibold text-gray-950">Acer</h3>
								<p className="text-sm text-gray-500">
									<span className="sr-only">Kategoria:</span>Komputery
								</p>
							</div>
							<p className="text-sm font-medium text-gray-900">
								<span className="sr-only">Cena:</span> 1000$
							</p>
						</div>
					</article>
				</li>
				<li>
					<article>
						<div className="hover:bg-slate-100: aspect-square overflow-hidden rounded-md border bg-slate-50">
							<Image
								width={320}
								height={320}
								src="/image/Laptop_2.png"
								alt="Dell"
								className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
							/>
						</div>
						<div className="mt-2 flex justify-between">
							<div>
								<h3 className="text-sm font-semibold text-gray-950">Produkt</h3>
								<p className="text-sm text-gray-500">
									<span className="sr-only">Kategoria</span>
								</p>
							</div>
							<p className="text-sm text-gray-500">
								Kategoria:
								<span className="sr-only">Cena:</span> 125$
							</p>
						</div>
					</article>
				</li>
				<li>
					<article>
						<div className="hover:bg-slate-100: aspect-square overflow-hidden rounded-md border bg-slate-50">
							<Image
								width={320}
								height={320}
								src="/image/Laptop_3.png"
								alt="Levovo"
								className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
							/>
						</div>
						<div className="mt-2 flex justify-between">
							<div>
								<h3 className="text-sm font-semibold text-gray-950">Produkt</h3>
								<p className="text-sm text-gray-500">Kategoria</p>
							</div>
							<p className="text-sm font-medium text-gray-900"></p>
						</div>
					</article>
				</li>
				<li>
					<article>
						<div className="hover:bg-slate-100: aspect-square overflow-hidden rounded-md border bg-slate-50">
							<Image
								width={320}
								height={320}
								src="/image/Laptop_4.png"
								alt="Asus"
								className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
							/>
						</div>
						<div className="mt-2 flex justify-between">
							<div>
								<h3 className="text-sm font-semibold text-gray-950">Produkt</h3>
								<p className="text-sm text-gray-500">Kategoria</p>
							</div>
							<p className="text-sm font-medium text-gray-900"></p>
						</div>
					</article>
				</li>
			</ul>
		</section>
	);
}
