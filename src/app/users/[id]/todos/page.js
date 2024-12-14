export default async function UserTodoPage({ params }) {
  const id = params.id
  // Server Side Rendered
  const [userRes, todosRes] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/' + id),
    fetch('https://jsonplaceholder.typicode.com/users/' + id + '/todos'),
  ])
  if (userRes.status === 404) {
    return <div>User not found</div>
  }
  if (!todosRes.ok || !userRes.ok) {
    return <div>Error fetching data</div>
  }
  const user = await userRes.json()
  const todos = await todosRes.json()

  return (
    <div>
      <h1 className="text-4xl font-bold">{user.name}'s Todos</h1>
      <hr className="my-2" />
      {todos.map((todo) => (
        <div key={todo.id} className="my-2">
          <h2 className="text-2xl font-semibold">{todo.title}</h2>
          <p className="text-lg">
            {todo.completed ? 'Completed' : 'Not Completed'}
          </p>
        </div>
      ))}
    </div>
  )
}
