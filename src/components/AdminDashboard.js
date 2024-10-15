import AdminTabs from "./AdminTabs";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function AdminDashBoard({ user }) {
	const { signOutUser } = useContext(AuthContext);

	return (
		<div>
			<div className="w-full flex items-center justify-between">
				<span>
					<strong> Admin: </strong>
					{user.email}
				</span>
				<button
					onClick={signOutUser}
					className="bg-red-500 rounded-lg px-6 py-2 text-white hover:bg-red-600 transition-all">
					Sign out
				</button>
			</div>
			<AdminTabs />
		</div>
	);
}
