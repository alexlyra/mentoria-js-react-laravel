import React from 'react';

interface TaskFormProps {
  currentTask: string;
  setCurrentTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ currentTask, setCurrentTask, addTask }) => {
  return (
    <div>
      <input
        type="text"
        id="taskInput"
        name="taskInput"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
