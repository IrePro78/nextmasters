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
					<footer>
						<p className="text-center text-sm ">© 2024</p>
					</footer>
				</body>
			</html>
		</>
	);
}
