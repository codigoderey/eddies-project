import CandidatesItem from "./CandidatesItem";

export default function CandidatesList({ candidates }) {
	return (
		<ul>
			{candidates?.map((c) => {
				return <CandidatesItem key={c.id} candidate={c} />;
			})}
		</ul>
	);
}
