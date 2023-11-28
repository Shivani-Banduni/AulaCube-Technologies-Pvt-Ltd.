import React, { useState ,useEffect} from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AddTask= () => {
const [data,setdata]=useState({
   taskname: '',
description: '',
priority: ''})



let init = JSON.parse(localStorage.getItem('finaldata')) || [];

const[finalData,setFinalData]=useState(init)

const  handlechange=(e)=>{
  const { name, value } = e.target;
  setdata((prevFormData) => ({
    ...prevFormData,
    [name]: value
  }));}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.taskname=='' || data.description=='' || data.priority==''){
      alert('Please fill the complete form')
    }
    
    else{
      alert('Data added successfully')
      // window.location.href='/tasklist'
      setFinalData([...finalData,data])

    }



  };

  useEffect(() => {
    console.log(finalData, 'data');
    localStorage.setItem('finaldata',JSON.stringify(finalData))
   
  }, [finalData]);

  return (
    <div style={{ width: '300px', margin: 'auto', marginTop: '40px' }}>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <TextField
               name='taskname'
          label="Task Name"
          variant="outlined"
          fullWidth
          value={data.taskname}
          onChange={handlechange}
          required
          margin="normal"
        />

        <TextField
                name='description'

          label="Task Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={data.description}
          onChange={handlechange}

          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="priority-label">Priority Level</InputLabel>
          <Select
                  name='priority'
value={data.priority}
            labelId="priority-label"
            id="priority"
            onChange={handlechange}

            label="Priority Level"
            required
          >
            <MenuItem value="">Select Priority</MenuItem>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
