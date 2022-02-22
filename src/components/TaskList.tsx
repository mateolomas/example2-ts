import React from 'react'
import Task  from '../interfaces/Task'
import TaskCard from './TaskCard';

interface Props {
    task: Task[]
    deleteTask: (id: number) => void
}


function TaskList({task, deleteTask}: Props) {
  return (
      <>
    <h2 className='text-white'>TaskList</h2>
    {task.map((task: Task) => 
    
    <div className="col-md-4" key={task.id}>
        <TaskCard  deleteTask={deleteTask} task={task}/>
    </div>
    
    
    
    
    
    )}
    </>

  )
}

export default TaskList