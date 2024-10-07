"use client"

import GetQuoteButton from "@/components/GetQuoteButton";
import Jumbotron from "@/components/Jumbotron";

export default function About(){
    return(
        <>
            <Jumbotron
                topText="About Us"
                mainText="We are a team of professionals with a passion for construction and cleaning services."
                subText="We are dedicated to providing top-notch services with minimal disruption. Our goal is to ensure that every project is completed with excellence."
            />
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-black">
                <GetQuoteButton />
            </div>
        </>
    )
}