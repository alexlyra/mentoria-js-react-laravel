// import { useEffect, useState } from 'react'
// import './App.css'
// import { TitlePrincipal } from './components/title-principal'
// import { SubTitle } from './components/sub-title'
// import { ToggleButton } from './components/toogle.button'
// import TaskList from './TaskList';
// import TaskForm from './TaskForm';

// function App() {
//   const [repositories, setRepositories] = useState([])
//   const [page, setPage] = useState(1)

//   // useEffect(() => {
//   //   const controller = new AbortController();

//   //   async function fetchData() {
//   //     const { signal } = controller;

//   //     const response = await fetch(`https://api.github.com/users/thiago-ximenes/repos?page=${page}`, { signal })
//   //     const data = await response.json()
//   //     if (!response.ok) {
//   //       console.error(data)
//   //       return
//   //     }
//   //     setRepositories(data)
//   //   }

//   //   fetchData()
//   //   return () => {
//   //     controller.abort();
//   //   }

//   // }, [page])

//   return (
//     <div className='flex flex-col gap-6'>
//       <TitlePrincipal>Alex</TitlePrincipal>
//       <SubTitle message='Sou uma mensagem' severity='warning' />
//       <ToggleButton />
//       {/* <ul>
//         {repositories.map((repo: {
//           id: number
//           name: string
//         }) => (
//           <li key={repo.id}>{repo.name}</li>
//         ))}
//       </ul> */}
//       {/* <br /> */}
//       {/* <button onClick={() => setPage(1)}>Page 1</button>
//       <button onClick={() => setPage(2)}>Page 2</button>
//       <button onClick={() => setPage(3)}>Page 3</button> */}
//     </div>
//   )
// }

// interface Task {
//   id: number;
//   text: string;
// }

// const AppList: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [currentTask, setCurrentTask] = useState<string>('');
//   const [editTaskId, setEditTaskId] = useState<number | null>(null);

//   const addTask = () => {
//     if (currentTask.trim()) {
//       setTasks([...tasks, { id: Date.now(), text: currentTask }]);
//       setCurrentTask('');
//     }
//   };

//   const updateTask = (id: number, newText: string) => {
//     setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
//     setEditTaskId(null);
//   };

//   const deleteTask = (id: number) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   return (
//     <div>
//       <h1>Task List</h1>
//       <TaskForm
//         currentTask={currentTask}
//         setCurrentTask={setCurrentTask}
//         addTask={addTask}
//       />
//       <TaskList
//         tasks={tasks}
//         editTaskId={editTaskId}
//         setEditTaskId={setEditTaskId}
//         updateTask={updateTask}
//         deleteTask={deleteTask}
//       />
//     </div>
//   );
// };


// export default App
