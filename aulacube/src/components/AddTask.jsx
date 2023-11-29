  import React, { useState ,useEffect} from 'react';
  import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
  // import { useContext } from 'react';
  // import { Taskcontext } from './ContextProvider';
  import { v4 as uuidv4 } from 'uuid';
  // const idd = uuidv4(); // Generating a unique ID using uuidv4



  const AddTask= () => {
    // const {finalData,setFinalData}=useContext(Taskcontext)
  const [data,setdata]=useState({
       id: uuidv4(), // Generate a unique ID using uuidv4 for each render
    taskname: '',
  description: '',
  priority: ''})

  let init = JSON.parse(localStorage.getItem('finaldata')) || [];
  const[finalData,setFinalData]=useState(init)

  // useEffect(() => {
  //   setdata(prevData => ({
  //     ...prevData,
  //     id: idd // Set the generated ID to the data state
  //   }));
  // }, []); 


  const  handlechange=(e)=>{
    const { name, value } = e.target;
    setdata((prevFormData) => ({
      ...prevFormData,
      [name]: value
    })); 
    console.log(data)
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(data.taskname=='' || data.description=='' || data.priority==''){
        alert('Please fill the complete form')
      }
      
      else{
        alert('Data added successfully')
      
        setFinalData([...finalData,data])
        window.location.href='/tasklist'

      }


  // console.log(finalData,'datafinal')
    };

    useEffect(() => {
      // console.log(finalData, 'data');
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
