import './App.css';
import Prime from './components/Prime.js';
import Odd from './components/Odd.js';
import Fibo from './components/Fibo';
import Rand from './components/Rand';
import Home from './components/Home.js'
import { BrowserRouter , Routes , Route  ,Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
            <li>
               <Link to="/"> Home</Link>
            </li>
            <li>
               <Link to="/prime"> Prime Numner</Link>
            </li>
            <li>
               <Link to="/odd">Odd Number</Link>
            </li>
            <li>
               <Link to="/fibo">Fibo Number</Link>
            </li>
            <li>
               <Link to="/rand">Random  Number</Link>
            </li>
         </nav>
      <Routes> 
        <Route path='/' element = {<Home />} />
      <Route path='/prime' element={<Prime />} />
      <Route path='/odd' element={<Odd />} />
      <Route path='/fibo' element={<Fibo />} />
      <Route path='/rand' element={<Rand />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
