import { useEffect } from "react";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

export default function FormSuccessProjectGallery() {
	useEffect(() => {
		initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX_PRIVATE_KEY, "Individual");
	});

	return (
		<>
			<h3 className="text-amber-600 italic text-2xl mb-4">
				Take a look at the beautiful work we can do for you. Go for the living
				that you deserve. We can help with that.
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
		</>
	);
}
