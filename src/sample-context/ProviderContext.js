import React, { createContext } from 'react'

// export  const TodoContext = createContext();
export  const TodoContext = createContext();
  TodoContext.displayName = 'TodoContext';

export default function TodoProvider({children}) {
    const [todoList, setTodoList] = React.useState([
        {
            key: '3',
            task: 'lorem ipsum',
            statu: true,
          }
    ]);

    const [user, setUser] = React.useState(
        {
            name:'fatih',
            age:22
          }
    );

    const contextValue={
        todoList,
        user,
        setTodoList,
        setUser
    }
  return (
    <TodoContext.Provider value={contextValue}>
        {children}
    </TodoContext.Provider>
  )
}
