import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import {Route, Routes} from 'react-router-dom'
import Tasklist from './components/TaskList ';
import Editask from './components/Editask';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">

    <Navbar/>
    <Routes>
<Route path='/' element={<AddTask/>}></Route>
<Route path='/tasklist' element={<Tasklist/>}></Route>
<Route path='/editask' element={<Editask/>}></Route>


    </Routes>
    </div>
  );
}

export default App;
