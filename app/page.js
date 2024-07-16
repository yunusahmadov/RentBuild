
import Link from "next/link"
export default function Home() {
  return (
      <main className="bg-red-300">
        Home
<Link href={"/properties"}>Properties</Link>

      </main>
  );
}
