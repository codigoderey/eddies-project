import GetQuoteButton from "./GetQuoteButton";

export default function HeaderSectionWithBgImage({
	topText,
	mainText,
	bottomText
}) {
	return (
		<div className="relative h-[calc(90vh-88px)] bg-black/10 mt-[88px] text-white">
			<div className="absolute inset-0 -z-10 h-full">
				<video
					src="/videos/mountains-video-01.mp4"
					autoPlay
					loop
					muted
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="mx-auto max-w-4xl text-center flex flex-col h-full justify-center">
				<p className="flex justify-center font-semibold leading-7 text-amber-700">
					<span className="w-fit bg-white px-3 md:py-1 lg:py-2 rounded-lg">
						{topText}
					</span>
				</p>
				<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white  my-10">
					{mainText}
				</h2>
				<p className="text-lg text-white md:text-2xl">
					<strong>{bottomText}</strong>
				</p>
				<div className="mt-16">
					<GetQuoteButton />
				</div>
			</div>
		</div>
	);
}
