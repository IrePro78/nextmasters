/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: { typedRoutes: true },
	images: { domains: ['naszsklep-api.vercel.app'] },
};

export default nextConfig;
