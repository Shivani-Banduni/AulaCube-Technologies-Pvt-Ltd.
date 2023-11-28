import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import {Route, Routes} from 'react-router-dom'
import Tasklist from './components/TaskList ';
import Editask from './components/Editask';
import Navbar from './components/Navbar';
import { Contextprovider } from './components/ContextProvider';
function App() {
 
  return (
    <Contextprovider>

<div className="App">

<Navbar/>
<Routes>
<Route path='/' element={<AddTask/>}></Route>
<Route path='/tasklist' element={<Tasklist/>}></Route>
<Route path='/editask/:index' element={<Editask/>}></Route>
{/* <Route path={`/editask/:${id}`} element={<Editask/>}></Route> */}


</Routes>
</div>
    </Contextprovider>
 
  );
}

export default App;
