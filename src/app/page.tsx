import { type Metadata } from 'next';
import React from 'react';
import { BestSellingProducts } from '@/components/organism/BestSellingProducts';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Home',
	};
}

export default function HomePage() {
	return (
		<div className="container mx-auto">
			<h1 className="py-4 text-center text-3xl">Home Page</h1>
			<section>
				<BestSellingProducts />
			</section>
		</div>
	);
}
