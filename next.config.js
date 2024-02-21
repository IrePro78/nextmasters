/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	experimental: { typedRoutes: true, mdxRs: true },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'naszsklep-api.vercel.app',
				pathname: '**',
			},
		],
	},
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
