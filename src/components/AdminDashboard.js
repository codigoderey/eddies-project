import AdminTabs from "./AdminTabs";

export default function AdminDashBoard({ user }) {
	return (
		<div>
			<strong>Admin:</strong> {user.email}
			<AdminTabs />
		</div>
	);
}
