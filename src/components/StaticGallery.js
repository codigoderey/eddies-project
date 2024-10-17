import { useEffect } from "react";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

export const staticGalleryVeteran = [
	<img
		alt="veteran army williams on duty"
		width={300}
		height={900}
		className="w-full h-full object-cover cursor-pointer"
		src="/images/veteran/01.jpg"
	/>,
	<img
		alt="veteran army williams on duty"
		width={300}
		height={900}
		className="w-full h-full object-cover cursor-pointer"
		src="/images/veteran/02.jpg"
	/>,
	<img
		alt="veteran army williams on duty"
		width={300}
		height={900}
		className="w-full h-full object-cover cursor-pointer"
		src="/images/veteran/04.jpg"
	/>,
	<img
		alt="veteran army williams on duty"
		width={300}
		height={900}
		className="w-full h-full object-cover cursor-pointer"
		src="/images/veteran/05.jpg"
	/>,
	<img
		alt="veteran army williams on duty"
		width={300}
		height={900}
		className="w-full h-full object-cover cursor-pointer"
		src="/images/veteran/06.jpg"
	/>,
	<img
		alt="veteran army williams on duty"
		width={300}
		height={900}
		className="w-full h-full object-cover cursor-pointer"
		src="/images/veteran/07.jpg"
	/>
];

export default function StaticGallery({ children, text }) {
	useEffect(() => {
		initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX_PRIVATE_KEY, "Individual");
	});

	return (
		<section className="mt-16 mb-32">
			<div className="mx-auto mb-32 max-w-7xl px-6 lg:px-8">
				<h3 className="text-amber-600 italic text-2xl mb-16">
					{text}
					Proudly veteran owned and operated business. Integrity, duty and
					respect also translate to our work. We can help with your home or
					business project needs.
				</h3>
				<SlideshowLightbox
					className="container grid grid-cols-3 gap-2 mx-auto"
					showThumbnails={true}>
					{children}
				</SlideshowLightbox>
			</div>
		</section>
	);
}
