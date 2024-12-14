import Link from 'next/link'

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }))
  return paths
}

export default async function UserPage({ params }) {
  const id = params.id
  // Server Side Generation
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const user = await res.json()

  return (
    <div>
      <h1 className="text-4xl font-bold">{user.name}</h1>
      <hr className="my-2" />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <Link
        href={`/users/${id}/todos`}
        className="text-blue-500 hover:underline"
      >
        View Todos
      </Link>
    </div>
  )
}
