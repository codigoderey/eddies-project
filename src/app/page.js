"use client";

import FeatureSectionLeftPicture from "@/components/FeatureSectionLeftPicture";
import HeaderSectionWithBgImage from "@/components/HeaderSectionWithBgImage";
import JumbotronCentered from "@/components/JumbotronCentered";

export default function Home() {
  return (
    <main>
      <HeaderSectionWithBgImage
        topText="Welcome to 4zImprov"
        mainText="Transformations with Construction and Cleaning Services"
        bottomText="Minimizing hassle, maximizing quality. Our services ensure top-notch results with minimal disruption. Experience excellence in every project, big or small."
      />
      <FeatureSectionLeftPicture />
      <JumbotronCentered  
        topText="Visit our image gallery"
        mainText="We love to showcase our work"
        subText="Take a look at our past projects and see the quality of our work for yourself."
      />
    </main>
  );
}
