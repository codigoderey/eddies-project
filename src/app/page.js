"use client";

import FeatureSectionLeftPicture from "@/components/FeatureSectionLeftPicture";
import HeaderSectionWithBgImage from "@/components/HeaderSectionWithBgImage";
import JumbotronCenteredWithButton from "@/components/JumbotronCenteredWithButton";
import StaticGallery from "@/components/StaticGallery";
import { staticGalleryVeteran } from "@/staticGalleries";

export default function Home() {
	return (
		<main>
			<HeaderSectionWithBgImage
				topText="Serving North Carolina since 2020"
				mainText="Transformations with Construction and Pressure Washing Services"
				bottomText="Minimizing hassle, maximizing quality. Our services ensure top-notch results with minimal disruption. Experience excellence in every project, big or small."
			/>
			<FeatureSectionLeftPicture />
			<JumbotronCenteredWithButton
				topText="We proudly showcase our work"
				mainText="Real projects from real images"
				subText="Feel the confidence of an outstanding work getting done the right way"
				hrefLink="/gallery"
				hrefText="View gallery"
				hasButton={true}
			/>
			<StaticGallery>{staticGalleryVeteran}</StaticGallery>
		</main>
	);
}
