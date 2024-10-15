import Link from "next/link";

export default function JumbotronCenteredWithButton({
	topText = "We are here for you",
	mainText = "Get a free quote when you need it",
	subText = "Fill out the required information and we will get back to you as soon as possible.",
	hrefLink = "/gallery",
	hrefText = "Visit now",
	hasButton = true
}) {
	return (
		<div className="bg-amber-50 px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<p className="text-base font-semibold leading-7 text-amber-600">
					{topText}
				</p>
				<h2 className="my-4 text-4xl font-bold tracking-tight text-amber-950 sm:text-6xl">
					{mainText}
				</h2>
				<p className="text-lg leading-8 text-gray-600">{subText}</p>
				{hasButton && (
					<Link
						className="inline-block mt-10 border border-2 shadow shadow-white border-black rounded-md bg-amber-600 px-10 py-6 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 transition-all"
						href={hrefLink}>
						{hrefText}
					</Link>
				)}
			</div>
		</div>
	);
}
