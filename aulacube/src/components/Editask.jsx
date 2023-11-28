import React from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Editask = () => {

    const handleEdit=()=>{

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
        //   value={data.taskname}
        //   onChange={handlechange}
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
