import React from 'react';

interface TaskFormProps {
  currentTask: string;
  setCurrentTask: (task: string) => void;
  addTask: () => void;
  error: string | null;
  setError: (error: string | null) => void; // Adicionado
}

const TaskForm: React.FC<TaskFormProps> = ({ currentTask, setCurrentTask, addTask, error, setError }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
    if (error) {
      setError(null); // Limpa a mensagem de erro ao digitar
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={currentTask}
        onChange={handleChange}
        style={{ borderColor: error ? 'red' : 'black' }}
      />
      <button type="submit">Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default TaskForm;
