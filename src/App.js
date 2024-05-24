import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {

  return <>
    <div className='content'>
      <Navbar />
      <Outlet />
    </div>
    <Footer />
  </>
}

export default App;
