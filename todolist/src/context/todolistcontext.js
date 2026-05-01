import { useContext, createContext } from "react";

export const TodolistContext = createContext({
    todos :[],
        addTodo: (todo) => {},
        updateTodo: (id, todo) => {},
        deleteTodo: (id) => {},
        toggleComplete: (id) => {},
        searchTodos: (title) => {},
        clearSearch: () => {},
        isSearching: false
});

export const useTodo = () => {
    return useContext(TodolistContext);
};

export const TodolistProvider = TodolistContext.Provider;