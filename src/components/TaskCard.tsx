import React from 'react'
import  Task  from '../interfaces/Task';

interface Props {
    task: Task;
    deleteTask: (id: number) => void;
}

function TaskCard({task, deleteTask}: Props) {
  return (
    
        <div className="card card-body bg-secondary rounded-0 text-dark">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            <button className="btn btn-danger btn-block" onClick={() => task.id && deleteTask(task.id)}>Delete</button>
        </div>
    
  )
}

export default TaskCard