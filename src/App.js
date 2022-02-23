import './App.css';
import Layout from './Projects/Layout';
import Home from './Projects/Home';
import Rotated from './Projects/Rotated';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000
});
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
