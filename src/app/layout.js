import "./globals.css";
import "lightbox.js-react/dist/index.css";
import "react-toastify/dist/ReactToastify.css";
import "lightbox.js-react/dist/index.css";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BusinessOwnerBanner from "@/components/BusinessOwnedBanner";
import { FirebaseProvider } from "@/context/FirebaseContext";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900"
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900"
});

export const metadata = {
	title:
		"4zImprov - Transformations with Construction and Pressure Washing Services",
	description:
		"Minimizing hassle, maximizing quality. Our services ensure top-notch results with minimal disruption. Experience excellence in every project, big or small.",
	keywords: [
		"4zImprov",
		"construction services near me",
		"construction services in north carolina",
		"construction services in north carolina near mountains blue ridge",
		"construction services in mountains blue ridge",
		"bathroom renovation services near me",
		"bathroom renovation services in north carolina",
		"bathroom renovation services in north carolina near mountains blue ridge",
		"bathroom renovation services in mountains blue ridge",
		"chimney remodeling or construction services near me",
		"chimney remodeling or construction services in north carolina",
		"chimney remodeling or construction services in north carolina near mountains blue ridge",
		"chimney remodeling or construction services in mountains blue ridge",
		"pressure washing services near me",
		"pressure washing services in north carolina",
		"pressure washing services in north carolina near mountains blue ridge",
		"pressure washing services in mountains blue ridge",
		"painting services near me",
		"painting services in north carolina",
		"painting services in north carolina near mountains blue ridge",
		"painting services in mountains blue ridge",
		"roofing services near me",
		"roofing services in north carolina",
		"roofing services in north carolina near mountains blue ridge",
		"roofing services in mountains blue ridge",
		"windows and doors services near me",
		"windows and doors services in north carolina",
		"windows and doors services in north carolina near mountains blue ridge",
		"windows and doors services in mountains blue ridge",
		"construction services near Boone, North Carolina",
		"construction services in Boone, North Carolina",
		"construction services in Watauga County, North Carolina",
		"construction services in Ashe  County, North Carolina",
		"bathroom renovation services near Boone, North Carolina",
		"bathroom renovation services in Boone, North Carolina",
		"bathroom renovation services in Watauga County, North Carolina",
		"bathroom renovation services in Ashe  County, North Carolina",
		"chimney remodeling or construction services near Boone, North Carolina",
		"chimney remodeling or construction services in Boone, North Carolina",
		"chimney remodeling or construction services in Watauga County, North Carolina",
		"chimney remodeling or construction services in Ashe  County, North Carolina",
		"pressure washing services near Boone, North Carolina",
		"pressure washing services in Boone, North Carolina",
		"pressure washing services in Watauga County, North Carolina",
		"pressure washing services in Ashe  County, North Carolina",
		"painting services near Boone, North Carolina",
		"painting services in Boone, North Carolina",
		"painting services in Watauga County, North Carolina",
		"painting services in Ashe  County, North Carolina",
		"roofing services near Boone, North Carolina",
		"roofing services in Boone, North Carolina",
		"roofing services in Watauga County, North Carolina",
		"roofing services in Ashe  County, North Carolina",
		"windows and doors services near Boone, North Carolina",
		"windows and doors services in Boone, North Carolina",
		"windows and doors services in Watauga County, North Carolina",
		"windows and doors services in Ashe  County, North Carolina"
	],
	openGraph: {
		title:
			"4zImprov - Transformations with Construction and Pressure Washing Services",
		description:
			"Minimizing hassle, maximizing quality. Our services ensure top-notch results with minimal disruption. Experience excellence in every project, big or small.",
		images: [
			{
				url: "/images/circle-logo.png"
			}
		]
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* add favicon */}
				<link rel="icon" href="/images/circle-logo.png" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
				<AuthProvider>
					<FirebaseProvider>
						<ToastContainer />
						<BusinessOwnerBanner />
						<Navigation />
						{children}
						<Footer />
					</FirebaseProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
