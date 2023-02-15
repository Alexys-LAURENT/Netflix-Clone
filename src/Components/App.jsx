import '../css/App.css';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className='Main'>
      <Navbar setSideBar={setSideBar} />
    </div>
  );
}

export default App;
