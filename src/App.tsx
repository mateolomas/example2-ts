
import "./App.css";
import TaskList from "./components/TaskList";
import Task from "../src/interfaces/Task";
import TaskForm from "./components/TaskForm";
import { useState } from 'react';




function App() {
  const [tasks, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      completed: false,
    },
  ]);

const getCurrentTimeStamp = (): number => 

  new Date().getTime();


  const newTask = (task: Task) => {
    setTask([...tasks, {...task, id: getCurrentTimeStamp(), completed: false}]);
  }


const deleteTask = (id: number) => setTask(tasks.filter(task => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h1 className="text-white"> Typescript Application</h1>
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={newTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList deleteTask={deleteTask} task={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
