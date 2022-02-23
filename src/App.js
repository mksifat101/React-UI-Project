import './App.css';
import Layout from './Projects/Layout';
import Home from './Projects/Home';
import Rotated from './Projects/Rotated';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/rotated' exact element={<Rotated />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
