"use client";

import FeatureSectionLeftPicture from "@/components/FeatureSectionLeftPicture";
import HeaderSectionWithBgImage from "@/components/HeaderSectionWithBgImage";
import JumbotronCenteredWithButton from "@/components/JumbotronCenteredWithButton";

export default function Home() {
	return (
		<main>
			<HeaderSectionWithBgImage
				topText="Welcome to 4zImprov"
				mainText="Transformations with Construction and Cleaning Services"
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
		</main>
	);
}
