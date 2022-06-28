import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePages/Home';
import About from './components/Pages/About';
import Blogs from './components/Pages/Blogs';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/Login/SignUp';
import Courses from './components/HomePages/Courses';

function App() {
  return (
    <div >

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/courses' element={<Courses></Courses>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>

    </div>
  );
}

export default App;
