export default function CandidatesItem({ candidate }) {
	const { First, Last, Email, Phone } = candidate;
	return (
		<li>
			{First} {Last}
		</li>
	);
}
