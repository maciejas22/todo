import { useState, useContext, useEffect } from 'react'

import Header from '../components/Header.jsx'
import Tasks from '../components/Tasks.jsx'

import ContentCSS from './HomePage.module.css'

import TaskContext from '../context/TaskContext'

const HomePage = () => {
    const [active, setActive] = useState(1)
    const [newTask, setNewTask] = useState('')
    let { tasks, getTasks, addTask } = useContext(TaskContext)

    const handleTaskFilter = (e) => {
        e.preventDefault()
        setActive(e.target.id)
    }

    useEffect(() => {
        getTasks()
    }, [])

    let filteredTasks = tasks.filter((task) => {
        let options = {
            1: task,
            2: !task.completed,
            3: task.completed
        }
        return options[active]
    })

    return (
        <div className={ContentCSS.hero}>
            <Header />

            {/* filter menu */}
            <ul className={ContentCSS.nav}>
                <li onClick={handleTaskFilter} className={active == '1' ? ContentCSS['active'] : undefined} id='1'>All</li>
                <li onClick={handleTaskFilter} className={active == '2' ? ContentCSS['active'] : undefined} id='2'>Active</li>
                <li onClick={handleTaskFilter} className={active == '3' ? ContentCSS['active'] : undefined} id='3'>Completed</li>
            </ul>
            <hr />

            {/* add task menu */}
            <form className={ContentCSS.addBox} onSubmit={addTask}>
                <input type="text" placeholder='add new task'/>
                <button >Add</button>
            </form>
        
            <Tasks tasks={filteredTasks}/>
        </div>
    )
}

export default HomePage