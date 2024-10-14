"use client";

import { useState } from "react";

export default function BusinessOwnerBanner() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleBanner = () => {
		setIsOpen(!isOpen);
		const chevron = document.getElementById("chevron");
		if (chevron.classList.contains("rotate-180")) {
			chevron.classList.remove("rotate-180");
		} else {
			chevron.classList.add("rotate-180");
		}
	};

	return (
		<div
			onClick={toggleBanner}
			className="px-6 py-1 bg-black text-white animation-all cursor-pointer">
			<div className="flex items-center justify-start md:justify-center relative">
				<img
					className="mr-2 md:mr-0 h-10"
					src="/images/united-states-flag.png"
				/>
				<span className="mr-1 md:mx-6 pr-4 md:pr-0">
					A Veteran-Owned and Operated Business
				</span>
				<img
					className="h-8 hidden md:inline-block"
					src="/images/veteran-star.png"
				/>
				<svg
					id="chevron"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="size-6 absolute right-0">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m19.5 8.25-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</div>
			{isOpen && (
				<p className="py-2">
					4ZImprov is owned by a proud US Army veteran, instilled with the
					values of integrity, hard work, and commitment. These principles are
					at the core of how they approach their business, ensuring customer
					satisfaction and top-quality service. To learn more about it{" "}
					<a className="text-amber-100 underline" href="/about">
						vist our about page
					</a>
					.
				</p>
			)}
		</div>
	);
}
