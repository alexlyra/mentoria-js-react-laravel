import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
}

interface TaskListProps {
  tasks: Task[];
  editTaskId: number | null;
  setEditTaskId: (id: number | null) => void;
  updateTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, editTaskId, setEditTaskId, updateTask, deleteTask }) => {
  const [editText, setEditText] = useState<string>('');

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (id: number) => {
    if (editText.trim()) {
      updateTask(id, editText);
      setEditTaskId(null);
      setEditText('');
    }
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editTaskId === task.id ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={handleEditChange}
                style={{ borderColor: editText.trim() === '' ? 'red' : 'black' }}
              />
              <button onClick={() => handleEditSubmit(task.id)}>Save</button>
              {editText.trim() === '' && <p style={{ color: 'red' }}>O campo não pode estar vazio!</p>}
            </div>
          ) : (
            <div>
              <span>{task.text}</span>
              <button onClick={() => setEditTaskId(task.id)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
