import Image from 'next/image';

export const ProductCoverCoverImage = ({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-stone-400 hover:bg-stone-500">
			<Image
				width={320}
				height={320}
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
