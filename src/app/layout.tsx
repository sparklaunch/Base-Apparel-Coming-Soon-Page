import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={josefinSans.className}>
			<body>{children}</body>
		</html>
	);
}
