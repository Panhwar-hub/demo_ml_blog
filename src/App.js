import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services'
import News from './components/pages/News'
import SignUp from './components/pages/SignUp'
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/services' element={<Services></Services>} />
          <Route path='/news' element={<News></News>} />
          <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
