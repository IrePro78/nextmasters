//@ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	experimental: { typedRoutes: true, mdxRs: true },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static-ourstore.hyperfunctor.com',
				pathname: '**',
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: '/products',
				destination: '/products/1',
				permanent: true,
			},
			{
				source: '/categories/:slug',
				destination: '/categories/:slug/1',
				permanent: true,
			},
		];
	},
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
