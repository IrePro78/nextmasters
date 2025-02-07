import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const inter = Inter({
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang="pl">
				<body className={inter.className}>
					<Navbar />
					{children}
					<footer className="flex items-center justify-between px-4 text-xs font-light ">
						<p>© 2024 by @IrePro. All rights reserved</p>
						<p>Powered by NextJS & NestJS</p>
					</footer>
				</body>
			</html>
		</>
	);
}
