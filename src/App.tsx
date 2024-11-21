import { useEffect, useState } from 'react'
import './App.css'
import { TitlePrincipal } from './components/title-principal'
import { SubTitle } from './components/sub-title'
import { ToggleButton } from './components/toogle.button'

function App() {
  const [repositories, setRepositories] = useState([])
  const [page, setPage] = useState(1)

  // useEffect(() => {
  //   const controller = new AbortController();

  //   async function fetchData() {
  //     const { signal } = controller;

  //     const response = await fetch(`https://api.github.com/users/thiago-ximenes/repos?page=${page}`, { signal })
  //     const data = await response.json()
  //     if (!response.ok) {
  //       console.error(data)
  //       return
  //     }
  //     setRepositories(data)
  //   }

  //   fetchData()
  //   return () => {
  //     controller.abort();
  //   }

  // }, [page])

  return (
    <div className='flex flex-col gap-6'>
      <TitlePrincipal>Alex</TitlePrincipal>
      <SubTitle message='Sou uma mensagem' severity='warning' />
      <ToggleButton />
      {/* <ul>
        {repositories.map((repo: {
          id: number
          name: string
        }) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul> */}
      {/* <br /> */}
      {/* <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button> */}
    </div>
  )
}

export default App
