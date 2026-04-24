import { useContext, createContext } from "react";

export const TodolistContext = createContext({
    todos :[
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
        Togglecomplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodolistContext);
};

export const TodolistProvider = TodolistContext.Provider;