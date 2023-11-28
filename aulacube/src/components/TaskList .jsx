import React, { useState, useEffect } from 'react';
import { Table, TableRow, TableCell, TableBody, TableHead, Button } from '@mui/material';
import '../App.css';
import { useContext } from 'react';
import Editask from './Editask';
import { Taskcontext } from './ContextProvider';
import { Link } from 'react-router-dom';


const Tasklist = () => {
   
//   const [tasks, setTasks] = useState([]);
  const {tasks,setTasks}=useContext(Taskcontext)

  const [edit,setedit]=useState(false)
  const task = JSON.parse(localStorage.getItem('finaldata'));

  useEffect(() => {
    console.log(task,'task')
    if (task) {
    setTasks(task)
    }
    console.log(tasks,'tasks')
  }, []);


  function handledit(index){
      console.log(index,'index')
     setedit(true) 
  }

  return (
    <div >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><h1>Task Name</h1></TableCell>
            <TableCell><h1>Status</h1></TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell>{task.taskname}</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>
                {/* {edit==true? */}
                 <Link to={`/editask/:${index}`}><Button >Edit</Button></Link>   


              </TableCell>
              <TableCell>
                <Button variant="outlined" color="error">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tasklist;
