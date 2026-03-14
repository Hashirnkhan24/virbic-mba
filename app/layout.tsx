import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Virbic — MBA Career Role Explorer",
		template: "%s | Virbic",
	},
	description:
		"Explore and compare 290+ MBA career roles across Marketing, Finance, Operations, HR, Sales, and Systems. Virbic helps MBA students understand responsibilities, skills, salary growth, stress levels, and career paths.",
	keywords: [
		"MBA careers",
		"MBA roles",
		"MBA specialization",
		"career exploration MBA",
		"MBA job roles",
		"marketing roles MBA",
		"finance roles MBA",
		"operations roles MBA",
	],
	openGraph: {
		title: "Virbic — MBA Career Role Explorer",
		description:
			"Explore and compare MBA roles across specializations to gain career clarity.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		/**
		 * suppressHydrationWarning is essential here.
		 * ThemeProviders (like next-themes) inject 'class' or 'style' attributes
		 * into the <html> tag after the initial server-side render.
		 * Without this, React will throw a hydration mismatch error in production.
		 */
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider>
					<Navbar />
					<main className="grow">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
