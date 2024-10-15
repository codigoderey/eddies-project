"use client";

import JumbotronCentered from "@/components/JumbotronCenteredWithButton";
import { useState } from "react";

export default function Gallery() {
	const [selection, setSelection] = useState("all");

	const projectsCategories = [
		"all",
		"bathroom",
		"decking",
		"flooring",
		"painting",
		"roofing",
		"chimney",
		"windows and doors"
	];

	const selectImagesCategory = (category) => {
		console.log(category);
		setSelection(category);
	};

	return (
		<main>
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
			</section>
		</main>
	);
}
