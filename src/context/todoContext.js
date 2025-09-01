import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos: [{

        id: 1, 
        todo: "To do Message",
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) =>{},
    toggleComplete: (id) => {}
})

export const Todoprovider = TodoContext.Provider 

export const useTodo = () => {
    return useContext(TodoContext)
}