import '../css/App.css';
import Navbar from './Navbar';
import SideBar from './SideBar';
import { useState } from 'react';

function App() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className='Main'>
      {sideBar === true ? <SideBar setSideBar={setSideBar} /> : null}
      <div className='body'>
        <Navbar SideBar={sideBar} setSideBar={setSideBar} />
      </div>
    </div>
  );
}

export default App;
