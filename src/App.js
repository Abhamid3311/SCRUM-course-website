import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePages/Home';
import About from './components/Pages/About';
import Blogs from './components/Pages/Blogs';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/Login/SignUp';
import Footer from './components/SharedPage/Footer';



// animation
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './components/SharedPage/Navbar';

function App() {

  //Initialized Aos
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
