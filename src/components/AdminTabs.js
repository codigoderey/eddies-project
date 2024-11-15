import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "@/context/FirebaseContext";
import CandidatesList from "./CandidatesList";
import ImagesHandler from "./ImagesHandler";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function AdminTabs() {
	const { getAllCandidates } = useContext(FirebaseContext);

	useEffect(() => {
		// pass the list type here to fech what we want
		getAllCandidates();
	}, []);

	const tabs = [
		{
			name: "Candidates",
			current: true,
			content: <CandidatesList candidates={[]} />
			// content: <CandidatesList candidates={candidates} />
		},
		{
			name: "Clients",
			current: false,
			content: <CandidatesList candidates={[]} />
			// content: <CandidatesList candidates={candidates} />
		},
		{
			name: "Subscriptions",
			current: false,
			content: <CandidatesList candidates={[]} />
			// content: <CandidatesList candidates={candidates} />
		},
		{
			name: "Upload Images",
			current: false,
			// content: <div></div>
			content: <ImagesHandler />
		}
	];

	const [currentTab, setCurrentTab] = useState(
		tabs.find((tab) => tab.current).name
	);

	const handleTabClick = (tabName) => {
		setCurrentTab(tabName);
	};

	return (
		<div className="my-16">
			<div className="sm:hidden">
				<label htmlFor="tabs" className="sr-only">
					Select a tab
				</label>
				<select
					id="tabs"
					name="tabs"
					value={currentTab}
					onChange={(e) => handleTabClick(e.target.value)}
					className="block w-full rounded-md border-gray-300 focus:border-amber-500 focus:ring-amber-500">
					{tabs.map((tab) => (
						<option key={tab.name} value={tab.name}>
							{tab.name}
						</option>
					))}
				</select>
			</div>
			<div className="hidden sm:block">
				<nav
					aria-label="Tabs"
					className="isolate flex divide-x divide-gray-200 rounded-lg shadow">
					{tabs.map((tab, tabIdx) => (
						<a
							key={tab.name}
							href={tab.href}
							onClick={(e) => {
								e.preventDefault();
								handleTabClick(tab.name);
							}}
							aria-current={tab.name === currentTab ? "page" : undefined}
							className={classNames(
								tab.name === currentTab
									? "text-gray-900"
									: "text-gray-500 hover:text-gray-700",
								tabIdx === 0 ? "rounded-l-lg" : "",
								tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
								"group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-amber-50 focus:z-10 transition-all"
							)}>
							<span>{tab.name}</span>
							<span
								aria-hidden="true"
								className={classNames(
									tab.name === currentTab ? "bg-amber-500" : "bg-transparent",
									"absolute inset-x-0 bottom-0 h-0.5"
								)}
							/>
						</a>
					))}
				</nav>
			</div>

			{/* Content Area */}
			<div className="mt-4">
				{tabs.find((tab) => tab.name === currentTab)?.content}
			</div>
		</div>
	);
}
