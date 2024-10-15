// app/not-found.js
import JumbotronCenteredWithButton from "@/components/JumbotronCenteredWithButton";
import Link from "next/link";

export default function NotFound() {
	return (
		<JumbotronCenteredWithButton
			topText="404 Error"
			mainText="Page Not Found"
			subText="The page you was looking for does not exist, click the link below to go to the home page."
			hrefLink="/"
			hrefText="Go to home page"
			hasButton={true}
		/>
	);
}
