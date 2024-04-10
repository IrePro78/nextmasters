import Image from 'next/image';

export function ProductThumbnailImage({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) {
	return (
		<div className="aspect-square overflow-hidden rounded border border-zinc-800 hover:bg-slate-500 dark:bg-slate-600">
			<Image
				width={34}
				height={34}
				src={src}
				alt={alt}
				quality={100}
				className="h-full w-full object-cover object-center transition-transform hover:scale-105"
			/>
		</div>
	);
}
