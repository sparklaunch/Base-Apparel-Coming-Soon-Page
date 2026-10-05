import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans();

export const metadata: Metadata = {
	title: "Base Apparel Coming Soon Page",
	icons: {
		icon: "/favicon.png"
	}
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={josefinSans.className}>
			<body>{children}</body>
		</html>
	);
}
