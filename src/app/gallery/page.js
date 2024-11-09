"use client";

import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "@/context/FirebaseContext";
import JumbotronCentered from "@/components/JumbotronCenteredWithButton";
import StaticGallery from "@/components/StaticGallery";

export default function Gallery() {
	const { loading, documents, fetchDocumentsByCategory } =
		useContext(FirebaseContext);

	const [selection, setSelection] = useState("all");

	const [images, setImages] = useState([]);

	const projectsCategories = [
		"all",
		"bathroom",
		"decking",
		"flooring",
		"painting",
		"roofing",
		"chimmey",
		"windows and doors",
		"pressure washing"
	];

	const selectImagesCategory = (category) => {
		setSelection(category);
	};

	useEffect(() => {
		const fetchImages = async () => {
			const docs = await fetchDocumentsByCategory(selection);

			let imgs = [];

			docs.forEach((doc) => {
				let o = {};
				o.src = doc.ImageUrl;
				o.alt = doc.Description;
				imgs.push(o);
			});

			setImages(imgs);
		};

		fetchImages();
	}, [selection]);

	return (
		<main>
			<div className="border-b w-full"></div>
			<JumbotronCentered
				topText="We proudly showcase our work"
				mainText="Projects gallery"
				subText="See by yourself and feel the confidence of an outstanding work getting done the right way"
				hasButton={false}
			/>

			<hr className="pb-14" />

			<section className="w-full">
				<nav className="w-full flex flex-wrap items-center justify-center">
					{projectsCategories.map((category) => (
						<button
							onClick={() => selectImagesCategory(category)}
							key={category}
							className={`${
								selection === category ? "bg-amber-600" : "bg-amber-950"
							} rounded-xl mx-2 leading-6 text-white px-3 py-1 m-1`}>
							{category}
						</button>
					))}
				</nav>

				{loading ? (
					<p className="text-center text-black my-20">Loading...</p>
				) : (
					<div className="container mx-auto">
						{documents.length === 0 ? (
							<p className="text-center text-black my-20">
								No images to show...
							</p>
						) : (
							<StaticGallery images={images} />
						)}
					</div>
				)}
			</section>
		</main>
	);
}
