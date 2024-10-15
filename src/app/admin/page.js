"use client";

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";
import Jumbotron from "@/components/Jumbotron";
import AdminDashBoard from "@/components/AdminDashboard";

export default function Admin() {
	const [loading, setLoading] = useState(true);

	const [email, setEmail] = useState("");

	const { sendEmailCode, validateSignedUser, user, verifyUserAuthChange } =
		useContext(AuthContext);

	useEffect(() => {
		setLoading(true);
		validateSignedUser();

		setTimeout(() => {
			try {
				const isVerified = verifyUserAuthChange();
				if (isVerified) {
					setLoading(false);
				}
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		}, 1000);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === "" || !email) {
			toast.warning("Your email is invalid, please enter a valid email.", {
				autoClose: 8000
			});
			return;
		}
		sendEmailCode(email);

		toast.success(
			"An email was sent to your inbox, please verify and get the code and type it here for validation. Check your spam if you don't see it within 3 minutes.",
			{
				autoClose: 8000
			}
		);
	};

	if (loading) {
		return (
			<div className="text-black text-center py-24">Loading content...</div>
		);
	}

	return (
		<main className="text-black">
			{!user ? (
				<>
					<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
						<div className="sm:mx-auto sm:w-full sm:max-w-sm">
							<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
								Sign in to your account
							</h2>
						</div>

						<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-6 ">
										Email address
									</label>
									<div className="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full rounded-md border border-gray-100 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className="flex w-full justify-center rounded-md bg-amber-950 px-3 py-1.5 text-sm text-white font-semibold leading-6  shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 transition-all">
										Send link
									</button>
								</div>
							</form>
						</div>
					</div>
				</>
			) : (
				<>
					<Jumbotron
						topText="Manage your business"
						mainText="Dashboard"
						subText="Manage your candidates, clients, subscribers and more."
					/>
					<section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
						<AdminDashBoard user={user} />
					</section>
				</>
			)}
		</main>
	);
}
