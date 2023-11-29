import React, { useState, useEffect } from 'react';
import { Table, TableRow, TableCell, TableBody, TableHead, Button } from '@mui/material';
import '../App.css';
import { useContext } from 'react';
import Editask from './Editask';
import { Taskcontext } from './ContextProvider';
import { Link } from 'react-router-dom';
// import { useId } from 'react';

const Tasklist = () => {
    const {tasks,setTasks} = useContext(Taskcontext)
  const [flag,setflag] = useState(false)

  const task = JSON.parse(localStorage.getItem('finaldata'));

  useEffect(() => {
    console.log(task,'task')
    if (task) {
    setTasks(task)
    }
    console.log(tasks,'tasks')

    
  }, [tasks]);


  function handleDelete(id){
      console.log('delet',id)
      const deletedData= tasks.filter((el)=> el.id!== id)
      console.log(deletedData,'deletedATA')
      localStorage.setItem('finaldata',JSON.stringify(deletedData));
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
         
       
{        tasks.map((task) => (
            <TableRow key={task.id}>
             <TableCell>{task.taskname}</TableCell>
            <TableCell>Status</TableCell>
           <TableCell>
               {/* {edit==true? */}
                 <Link to={`/editask/${task.id}`}><Button >Edit</Button></Link>   


             </TableCell>
              <TableCell>
                <Button variant="outlined" color="error" onClick={()=>handleDelete(task.id)}>Delete</Button>
              </TableCell>
            </TableRow>
         ))
}
         
        </TableBody>
      </Table>
    </div>
  );
};

export default Tasklist;



