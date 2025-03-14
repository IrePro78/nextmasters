/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	output: 'standalone',

	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '**',
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
			{
				source: '/collections/:slug',
				destination: '/collections/:slug/1',
				permanent: true,
			},
		];
	},
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
