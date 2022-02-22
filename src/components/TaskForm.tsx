import { AiOutlinePlus } from "react-icons/ai";
import { useState, ChangeEvent, useRef, FormEvent } from "react";
import Task from "../interfaces/Task";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  addANewTask: (task: Task) => void;
}

const initialState = {
  title: "",
  description: "",
};

function TaskForm({ addANewTask }: Props) {
  const [task, setTask] = useState<Task>(initialState);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleInputChange = ({ target }: HandleInputChange) => {
    setTask({ ...task, [target.name]: target.value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    addANewTask(task);
    setTask(initialState);
    inputTitle.current?.focus();
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h2>Add task</h2>

      <form onSubmit={handleNewTask}>
        <input
          type="text"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          placeholder="Title"
          onChange={handleInputChange}
          autoFocus
          value={task.title}
          ref={inputTitle}
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Write here"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
