import { revalidatePath } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();

	if (
		typeof body === 'object' &&
		body &&
		'productId' in body &&
		typeof body.productId === 'string'
	) {
		console.log(
			'Webhook received: Product created or updated. Revalidating cache.',
		);

		revalidatePath(`/product/${body.productId}`);
		// revalidatePath(`/products`);
		return NextResponse.json(null, { status: 204 });
	} else {
		return NextResponse.json(null, { status: 400 });
	}
}
