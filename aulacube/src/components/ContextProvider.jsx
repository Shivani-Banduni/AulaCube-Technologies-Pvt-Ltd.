import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const Taskcontext=createContext()

const Contextprovider = ({children}) => {

  
    const [tasks, setTasks] = useState([]);

    return (
    <Taskcontext.Provider  value={{tasks,setTasks}}>{children}</Taskcontext.Provider>

    );
}

export { Taskcontext ,Contextprovider};
