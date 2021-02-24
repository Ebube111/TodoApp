import React, { createContext, useState, useEffect } from 'react'


export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem("tasks")) || []

   const [tasks, setTasks] = useState(initialState)

    const [editItem, setEditItem] = useState(null)


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title, body) => {
        setTasks([...tasks, {title, id: Math.random(), body }])   
        
    }

    const allTasks = addTask

    const removeTask = id => {
        setTasks(tasks.filter(task=> task.id !==id))
    }

    const clearList = () => {
        setTasks([])
    }

    const findItem = (id) => {
        const item = tasks.find(task => task.id === id)

        setEditItem(item)
    }

    const editTask = (title, body, id) => {
        const newTasks = tasks.map(task => (task.id ===id) ? {title, body, id}: task)
        
        setTasks(newTasks)
        setEditItem(null)
    }

    return (
        <div>
            <TaskListContext.Provider value={{tasks, allTasks, editItem, editTask, addTask, removeTask, clearList, findItem}}>
                {props.children}
            </TaskListContext.Provider>
        </div>
    )
}

export default TaskListContextProvider;