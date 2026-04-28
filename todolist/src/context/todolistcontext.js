import { useContext, createContext } from "react";

export const TodolistContext = createContext({
    todos :[
        // Sample todo for reference 
        // from here we can see what we have to use in our backend and frontend
        {
            id: 1,
            title: "Learn React",
            description: "Learn React by building a todo list app",
            completed: false
        }
    ],
        addTodo: (todo) => {},
        updateTodo: (id, todo) => {},
        deleteTodo: (id) => {},
        toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodolistContext);
};

export const TodolistProvider = TodolistContext.Provider;