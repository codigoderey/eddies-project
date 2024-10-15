"use client";

import JumbotronCenteredWithButton from "@/components/JumbotronCenteredWithButton";

export default function About() {
	return (
		<>
			<JumbotronCenteredWithButton
				topText="About us"
				mainText="A team of professionals with a passion for excellence."
				subText="We are dedicated to providing top-notch services with minimal disruption. Our goal is to ensure that every project is completed with excellence."
				hrefLink="/quote"
				hrefText="Get an estimate"
				hasButton={true}
			/>
		</>
	);
}
