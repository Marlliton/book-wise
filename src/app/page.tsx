import Link from "next/link";

export default async function Home() {

  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await data.json()

  return (
    <main>
      <h1>Opa</h1>
      <Link href={'/dashboard'}>Dashboard</Link><br />
      <div>
        {JSON.stringify(users)}
      </div>
    </main>
  );
}
 