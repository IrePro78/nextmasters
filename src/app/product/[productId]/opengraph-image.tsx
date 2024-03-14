import { ImageResponse } from 'next/og';
import { NextResponse } from 'next/server';
import Image from 'next/image';
import { getProductById } from '@/api/products';
import { formatMoney } from '@/utils/formater';

export const runtime = 'edge';

export const alt = 'Open Graph Next 14';
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = 'image/png';

export default async function og({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	if (!product) return new NextResponse('OK', { status: 200 });

	return new ImageResponse(
		(
			<div tw="relative w-full overflow-hidden rounded-lg flex">
				<div tw="flex items-center justify-center">
					<Image
						tw="h-full w-full object-cover object-center"
						width={400}
						height={400}
						src={product.product_image}
						alt={product.name}
					/>
				</div>
				<div tw="flex flex-col text-zinc-50 px-4 gap-4">
					<h1 tw="text-zinc-50 text-2xl">{product.name}</h1>
					<span>
						{product.categories && product.categories[0]?.name}
					</span>
					<p>{product.description}</p>
					<span>{formatMoney(product.price / 100)}</span>
				</div>
			</div>
		),
		{
			...size,
		},
	);
}
