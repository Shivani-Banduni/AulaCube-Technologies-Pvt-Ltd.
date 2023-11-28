import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      <Link to='/'>        <Button color="inherit" sx={{ color: 'white' }}><b>Add Task</b></Button></Link>
      <Link to='/tasklist'>        <Button color="inherit" sx={{ color: 'white' }}><b>Task List</b></Button></Link>
      <Link to='/editask'>        <Button color="inherit" sx={{ color: 'white' }}><b>Edit Task</b></Button></Link>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
