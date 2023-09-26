import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "Ahmed | Personal Portfolio",
	description: "Ahmed Abd El Hameed is a software Engineer from Egypt",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div className="xl:w-[1280px] xs:w-[640px] lg:w-[1024px] sm:w-[767px] mx-auto ">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
