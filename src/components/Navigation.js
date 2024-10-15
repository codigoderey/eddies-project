"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import GetQuoteButton from "./GetQuoteButton";
import Link from "next/link";

export default function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<header className="bg-white">
				<nav
					aria-label="Global"
					className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-6">
					<div className="flex text-amber-950 font-bold text-3xl">
						<Link href="/">4Z Improv</Link>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="hidden lg:flex space-x-6">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">4Z Improvements</span>
							<img
								width={128}
								height={64}
								alt=""
								src="/images/logo.png"
								className=""
							/>
						</Link>
					</div>
				</nav>
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className="lg:hidden">
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-center">
							<Link
								href="/"
								className="-m-1.5 p-1.5"
								onClick={() => setMobileMenuOpen(false)}>
								<span className="sr-only">4Z Improv</span>
								<img
									width={128}
									height={64}
									alt=""
									src="/images/logo.png"
									className=""
								/>
							</Link>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700 absolute top-6 right-6">
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="h-6 w-6" />
							</button>
						</div>
						<div className="mt-10 flow-root text-center">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div
									className="space-y-2 py-6"
									onClick={() => setMobileMenuOpen(false)}>
									<GetQuoteButton />
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
		</>
	);
}
