import { useEffect } from "react";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import JumbotronCenteredWithButton from "./JumbotronCenteredWithButton";

export default function FormSuccessProjectGallery() {
	useEffect(() => {
		initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX_PRIVATE_KEY, "Individual");
	});

	return (
		<section className="mt-16 mb-32">
			<div className="mx-auto mb-32 max-w-7xl px-6 lg:px-8">
				<h3 className="text-amber-600 italic text-2xl mb-16">
					Take a look at the beautiful work we can do for you. Go for the living
					that you deserve. We can help with that. If you want to contact us
					with any questions, please call{" "}
					<a className="underline" href="tel:910-336-2054">
						910-336-2054
					</a>{" "}
					or email{" "}
					<a
						className="underline"
						href="mailto:4zimprov@4zimprov.com?subject=Customer inquiry.">
						info@4zimprov.com
					</a>
					.
				</h3>
				<SlideshowLightbox
					className="container grid grid-cols-3 gap-2 mx-auto"
					showThumbnails={true}>
					<img
						alt="construction work service"
						width={300}
						height={400}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/00.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/01.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/02.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/04.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/05.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/06.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/07.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/08.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/09.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/10.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/11.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/12.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/13.jpg"
					/>
					<img
						alt="construction work service"
						width={300}
						height={900}
						className="w-full h-full object-cover cursor-pointer"
						src="/images/14.jpg"
					/>
				</SlideshowLightbox>
			</div>
			<JumbotronCenteredWithButton
				topText="See more images"
				mainText="Real projects from real images"
				subText="Click the link below to see more projects images"
				hrefLink="/gallery"
				hrefText="View gallery"
				hasButton={true}
			/>
		</section>
	);
}
