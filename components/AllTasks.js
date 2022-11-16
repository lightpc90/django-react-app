import { useState, useEffect } from 'react'
import axios from 'axios'

const AllTasks = () => {
    const [tasks, setTasks] = useState([])
    const [completed, setCompleted] = useState(false)
    const [activeItem, setActiveItem] = useState({})

    useEffect(() => {getData()}, [])

    const getData = () => {
        return (
            axios.get('http://127.0.0.1:8000/api/tasks/')
        .then(res => setTasks(res.data),
        console.log(tasks))
        .catch(err => console.log(err))
        )
    }

    const displayCompleted = (completed) => {
        return (setCompleted(!completed))
    }
    
    const TableList = () => {
        return (
            <div>
                <span 
                onClick={() => displayCompleted(completed)}
                >
                    completed
                </span>
                <span>
                    incompleted
                </span>
            </div>
        )
    }

  return (
    tasks.map((task) => (
    <div key={task.id}>
       <span>
            {task.title}
        </span> 
       <span>
            <button>Edit</button>
            <button>Delete</button>
        </span>
    </div>))
  )
}

export default AllTasks