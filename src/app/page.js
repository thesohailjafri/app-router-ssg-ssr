import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center">
        SSR, SSG in App Router with Next.js
      </h1>
      <hr className="my-2" />
      <div className="grid place-items-center">
        <Link href="/users" className="text-blue-500 text-center">
          Users Page
        </Link>
      </div>
    </div>
  )
}
