import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GetQuoteButton() {
  const pathname = usePathname();



  if (pathname === "/quote") return null;

  return (
    <Link
      href="/quote"
      type="button"
      className="rounded-md bg-amber-950 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 transition-all"
    >
      Get an estimate
    </Link>
  );
}
