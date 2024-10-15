export default function Jumbotron({
	topText = "We are here for you",
	mainText = "Get a free quote when you need it",
	subText = "Fill out the required information and we will get back to you as soon as possible."
}) {
	return (
		<div className="bg-amber-50 py-16 border border-y">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<p className="text-base font-semibold leading-7 text-amber-600">
						{topText}
					</p>
					<h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						{mainText}
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">{subText}</p>
				</div>
			</div>
		</div>
	);
}
