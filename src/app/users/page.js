import Link from 'next/link'

export default async function UsersPage() {
  // Server Side Generation
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return (
    <div>
      <h1 className="text-4xl font-bold">Users</h1>
      <hr className="my-2" />
      {users.map((user) => (
        <div key={user.id} className="my-2">
          <Link href={`/users/${user.id}`} className="text-2xl font-semibold">
            {user.name}
          </Link>
          <p className="text-lg">{user.email}</p>
        </div>
      ))}
    </div>
  )
}
