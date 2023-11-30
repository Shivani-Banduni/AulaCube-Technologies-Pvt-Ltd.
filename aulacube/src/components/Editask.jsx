import React from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Taskcontext } from './ContextProvider';
const Editask = () => {
const[editdata,seteditdata]=React.useState ({})



const{tasks,setTasks}=useContext(Taskcontext)

    const   idd=useParams().index

 

function handleEditChange(e){
    seteditdata({...editdata,[e.target.name]:e.target.value})
}

    const handleEdit=(e)=>{
        e.preventDefault()
const editedData= {
    id : idd,
    ...editdata
}
console.log(editedData,"editeddata")
console.log(editedData,'editedData');

const newTasks = tasks.map((el)=>{
    if (el.id == editedData.id){
       return editedData
    }
    return el
})
const task = localStorage.setItem('finaldata',JSON.stringify(newTasks));
setTasks(newTasks)
alert('Your data is updated in Tasklist ')
    }
    return (
        <div style={{ width: '300px', margin: 'auto', marginTop: '40px' }}>
      <h2>Edit Task</h2>
      <form onSubmit={handleEdit}>
        <TextField
               name='taskname'
          label="Task Name"
          variant="outlined"
          fullWidth
          onChange={handleEditChange}
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
        //   value={data.description}
        //   onChange={handlechange}
        onChange={handleEditChange}

          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="priority-label">Priority Level</InputLabel>
          <Select
                  name='priority'
// value={data.priority}
            labelId="priority-label"
            id="priority"
            // onChange={handlechange}
            onChange={handleEditChange}

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
}

export default Editask;
