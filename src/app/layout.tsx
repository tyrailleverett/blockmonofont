import type { Metadata } from "next";
import { Roboto, Spline_Sans } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "Block Mono - A Modern Monospace Font for Developers",
		template: "%s | Block Mono",
	},
	description:
		"A modern, highly legible monospace font designed specifically for coding and development environments. Features perfect alignment, programming ligatures, and a tall character design.",
	keywords: [
		"monospace font",
		"programming font",
		"coding font",
		"developer font",
		"ligatures",
		"Block Mono",
		"typography",
		"code editor font",
	],
	authors: [
		{
			name: "Block Mono Team",
		},
	],
	icons: {
		icon: [
			{
				url: "/favicon-96x96.png",
				sizes: "96x96",
				type: "image/png",
				rel: "icon",
			},
			{
				url: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
				rel: "apple-touch-icon",
			},
		],
	},
	creator: "Block Mono Team",
	publisher: "Block Mono",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://blockmono.com",
		title: "Block Mono - A Modern Monospace Font for Developers",
		description:
			"A modern, highly legible monospace font designed specifically for coding and development environments. Features perfect alignment, programming ligatures, and a tall character design.",
		siteName: "Block Mono",
	},
	twitter: {
		card: "summary_large_image",
		title: "Block Mono - A Modern Monospace Font for Developers",
		description:
			"A modern, highly legible monospace font designed specifically for coding and development environments. Features perfect alignment, programming ligatures, and a tall character design.",
		creator: "@blockmono",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const blockMono = localFont({
	src: "./fonts/BlockMono-Regular.ttf",
	variable: "--font-block-mono",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto",
});

const splineSans = Spline_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-spline-sans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="48x48" />
			</head>
			<body
				className={cn(
					"bg-black font-sans text-gray-100 antialiased",
					roboto.variable,
					splineSans.variable,
					blockMono.variable,
				)}
			>
				<ThemeProvider>
					{children}
					<Toaster
						richColors
						closeButton
						position="top-center"
						toastOptions={{}}
						expand
					/>
				</ThemeProvider>
				<Script
					async
					src="https://umami.beyondpixeldesign.com/script.js"
					data-website-id="6b70c30b-44eb-41d4-af1b-fb46bcde2e47"
				/>
			</body>
		</html>
	);
}
