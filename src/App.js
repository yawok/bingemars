import { useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import LatestPhotos from './pages/LatestPhotos';

function App() {

  return <>
    <Navbar />
    <LatestPhotos />
  </>
}

export default App;
