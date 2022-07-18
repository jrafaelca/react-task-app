import {createContext, useContext, useState} from 'react'
import {v4 as uuid} from 'uuid';

export const DataContext = createContext();

export const useData = () => useContext(DataContext)

export const DataProvider = ({children}) => {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        setTasks([
            ...tasks,
            {...task, id: uuid()}
        ])
    }

    const findTask = (id) => {
        return tasks.find(task => task.id === id)
    }

    const updateTask = (task) => {
        setTasks(tasks.map(t => t.id === task.id ? task : t))
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    return (
        <DataContext.Provider value={{tasks, addTask, findTask, updateTask, removeTask}}>
            {children}
        </DataContext.Provider>
    )
}