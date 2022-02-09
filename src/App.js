import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
const App = () => {
  

  return (
    <Router>
      <>
      <Navbar />
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
      </>
    </Router>
  );
};

export default App;
