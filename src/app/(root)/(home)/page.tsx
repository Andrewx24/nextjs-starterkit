import Link from 'next/link'


export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <h1> Next Js starter kit</h1>
      <Link href="/about"> About</Link>
      <Link href="/store"> Store Page</Link>
    </div>
  )
}