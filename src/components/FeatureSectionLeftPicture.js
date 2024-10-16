import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import GetQuoteButton from "./GetQuoteButton";
import Image from "next/image";

const features = [
	{
		name: "Bathroom Renovation",
		description:
			"Transform your bathroom with modern fixtures and elegant designs. Our team ensures a seamless renovation process.",
		icon: CheckBadgeIcon
	},
	{
		name: "Chimmey Construction",
		description:
			"We do chimmey remodeling and construction. Our experts provide excelent work in developing chimmeys.",
		icon: CheckBadgeIcon
	},
	{
		name: "Decking Installation",
		description:
			"Enhance your outdoor space with custom decking solutions. We offer durable and stylish options.",
		icon: CheckBadgeIcon
	},
	{
		name: "Painting Services",
		description:
			"Give your home a fresh look with our professional painting services. We use high-quality paints for a lasting finish.",
		icon: CheckBadgeIcon
	},
	{
		name: "Roofing Solutions",
		description:
			"Protect your home with our reliable roofing services. We handle repairs, replacements, and installations.",
		icon: CheckBadgeIcon
	},
	{
		name: "Windows & Doors",
		description:
			"Upgrade your windows and doors for better insulation and security. Our products are energy-efficient and stylish.",
		icon: CheckBadgeIcon
	},
	{
		name: "Cleaning Services",
		description:
			"Our cleaning services are designed to keep your home and office clean. We offer professional cleaning solutions.",
		icon: CheckBadgeIcon
	}
];

export default function FeatureSectionLeftPicture({
	topText = "Hire with confidence",
	mainText = "A better way to build",
	subText = "Our services are designed to help you succeed. We provide the best quality construction and cleaning services to help you achieve your goals.",
	imgUrl = "https://images.unsplash.com/photo-1617850687405-a18454436d77?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}) {
	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pr-8 lg:pt-4">
						<div className="lg:max-w-lg">
							<h2 className="text-base font-semibold leading-7 text-amber-600">
								{topText}
							</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								{mainText}
							</p>
							<p className="mt-6 text-lg leading-8 text-gray-600">{subText}</p>
							<dl className="my-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<dt className="inline font-semibold text-gray-900">
											<feature.icon
												aria-hidden="true"
												className="absolute left-1 top-1 h-5 w-5 text-amber-600"
											/>
											{feature.name}
										</dt>{" "}
										<dd className="inline">{feature.description}</dd>
									</div>
								))}
							</dl>
							<GetQuoteButton />
						</div>
					</div>
					<Image
						alt="Product screenshot"
						src={imgUrl}
						width={2432}
						height={1442}
						className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
					/>
				</div>
			</div>
		</div>
	);
}
