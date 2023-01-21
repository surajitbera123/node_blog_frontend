import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Bollywood from './Pages/Bollywood';
import Technology from './Pages/Technology';
import Hollywood from './Pages/Hollywood';
import Fitness from './Pages/Fitness';
import Food from './Pages/Food';
import NextPage from './Pages/Nextpage';

function App() {
  
  return (
     <>
     <BrowserRouter>
         
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/bollywood" element={<Bollywood/>}/>
             <Route path="/technology" element={<Technology/>}/>
             <Route path="/hollywood" element={<Hollywood/>}/>
             <Route path="/fitness" element={<Fitness/>}/>
             <Route path="/food" element={<Food/>}/>
             <Route path="/NextPage" element={<NextPage/>}/>
         </Routes>
         
     </BrowserRouter>

  
     </>
  );
}

export default App;