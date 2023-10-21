import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Link href={"/dashboard"}>ir para o dashboard</Link>
    </main>
  )
}
