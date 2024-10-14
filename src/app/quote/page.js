import Jumbotron from "@/components/Jumbotron";
import LeadForm from "@/components/LeadForm";

export default function QuotePage() {
	return (
		<main>
			<Jumbotron />
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<LeadForm />
			</div>
		</main>
	);
}
