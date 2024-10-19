import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GetQuoteButton() {
	const pathname = usePathname();

	if (pathname === "/quote") return null;

	return (
		<Link
			href="/quote"
			type="button"
			className="border border-2 shadow shadow-white border-black rounded-md bg-amber-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 transition-all">
			Get an estimate
		</Link>
	);
}
