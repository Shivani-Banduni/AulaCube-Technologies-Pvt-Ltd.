import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const Taskcontext=createContext()

const Contextprovider = ({children}) => {

    // let init = JSON.parse(localStorage.getItem('finaldata')) || [];
    // const[finalData,setFinalData]=useState(init);
    const [tasks, setTasks] = useState([]);

    return (
    //    <Taskcontext.Provider  value={{finalData,setFinalData}}>{children}</Taskcontext.Provider>
    <Taskcontext.Provider  value={{tasks,setTasks}}>{children}</Taskcontext.Provider>

    );
}

export { Taskcontext ,Contextprovider};
