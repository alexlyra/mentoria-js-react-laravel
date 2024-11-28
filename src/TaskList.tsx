import React from 'react';

interface Task {
  id: number;
  text: string;
}

interface TaskListProps {
  tasks: Task[];
  editTaskId: number | null;
  setEditTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  updateTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  editTaskId,
  setEditTaskId,
  updateTask,
  deleteTask,
}) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editTaskId === task.id ? (
            <input
              type="text"
              value={task.text}
              onChange={(e) => updateTask(task.id, e.target.value)}
            />
          ) : (
            <span>{task.text}</span>
          )}
          <button onClick={() => setEditTaskId(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
