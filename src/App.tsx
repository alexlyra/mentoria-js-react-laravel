import { useState } from 'react';
import './App.css';
import { TitlePrincipal } from './components/title-principal';
import { SubTitle } from './components/sub-title';
import { ToggleButton } from './components/toogle.button';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

interface Task {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<string>('');
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addTask = () => {
    console.log('Adding Task:', currentTask);
    if (!currentTask.trim()) {
      setError('O campo não pode estar vazio!');
    } else if (!isNaN(Number(currentTask))) {
      setError('O campo não pode conter apenas números!');
    } else {
      const newTasks = [...tasks, { id: Date.now(), text: currentTask }];
      console.log('Updated Task List:', newTasks);
      setTasks(newTasks);
      setCurrentTask('');
      setError(null);
    }
  };

  const updateTask = (id: number, newText: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
    setEditTaskId(null);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='flex flex-col gap-6'>
      <TitlePrincipal>Alex</TitlePrincipal>
      <SubTitle message='Sou uma mensagem' severity='warning' />
      <ToggleButton />
      <h1>Task List</h1>
      <TaskForm
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        addTask={addTask}
        error={error}
        setError={setError} // Passando setError para o TaskForm
      />
      <TaskList
        tasks={tasks}
        editTaskId={editTaskId}
        setEditTaskId={setEditTaskId}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
