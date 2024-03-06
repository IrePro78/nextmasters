import { type Metadata } from 'next';
import React from 'react';
import { PromotionalProducts } from '@/components/organism/PromotionalProducts';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Home',
	};
}

export default function HomePage() {
	return (
		<div className=" min-h-ful mx-auto text-zinc-100 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<h1 className="py-4 text-center text-3xl">Home Page</h1>
			<section>
				<PromotionalProducts />
			</section>
		</div>
	);
}
