import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [repositories, setRepositories] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      const { signal } = controller;

      const response = await fetch(`https://api.github.com/users/thiago-ximenes/repos?page=${page}`, { signal })
      const data = await response.json()
      if (!response.ok) {
        console.error(data)
        return
      }
      setRepositories(data)
    }


    fetchData()
    return () => {
      controller.abort();
    }

  }, [page])

  return (
    <div>
      <h1>Repositories</h1>
      <ul>
        {repositories.map((repo: any) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <br />
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => { setPage(2) }}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>
    </div>
  )
}

export default App
