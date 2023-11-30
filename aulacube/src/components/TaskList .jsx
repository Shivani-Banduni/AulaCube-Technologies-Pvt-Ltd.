import React, { useState, useEffect } from 'react';
import { Table, TableRow, TableCell, TableBody, TableHead, Button } from '@mui/material';
import '../App.css';
import { useContext } from 'react';
import Editask from './Editask';
import { Taskcontext } from './ContextProvider';
import { Link } from 'react-router-dom';

const Tasklist = () => {
  const { tasks, setTasks } = useContext(Taskcontext);
  const [div, selectediv] = useState([]);

  useEffect(() => {
    const taskData = JSON.parse(localStorage.getItem('finaldata'));
    if (taskData) {
      setTasks(taskData);
    }
  }, [setTasks]);

  function handleDelete(id) {
    const deletedData = tasks.filter((el) => el.id !== id);
    localStorage.setItem('finaldata', JSON.stringify(deletedData));
    window.location.reload();
  }

  function handlestatus(e, id) {
    const newarr = [...div];
    newarr[id] = e.target.value === 'completed';
    selectediv(newarr);
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><h1>Task Name</h1></TableCell>
            <TableCell><h1>Status</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell style={{ textDecoration: div[task.id] ? 'line-through' : 'none' }}>
                {task.taskname}
              </TableCell>
              <TableCell>
                <label>
                  <input
                    onChange={(e) => handlestatus(e, task.id)}
                    type="radio"
                    name={`status_${task.id}`}
                    value='completed'
                  />
                  Completed
                </label>
                <br />
                <label>
                  <input
                    onChange={(e) => handlestatus(e, task.id)}
                    name={`status_${task.id}`}
                    type="radio"
                    value='Notcompleted'
                  />
                  Not Complete
                </label>
              </TableCell>
              <TableCell>
                <Link to={`/editask/${task.id}`}><Button>Edit</Button></Link>
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="error" onClick={() => handleDelete(task.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tasklist;
