"use client";

import JumbotronCenteredWithButton from "@/components/JumbotronCenteredWithButton";
import StaticGallery from "@/components/StaticGallery";
import { staticGalleryVeteran } from "@/staticGalleries";

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
      <StaticGallery
        images={staticGalleryVeteran}
        text="Staff Sergeant Serrano is a veteran business owner and operator. Integrity, duty and respect translate to our work ethics. We can help with your home or business project needs."
      ></StaticGallery>
    </>
  );
}
