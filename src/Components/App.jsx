import '../css/App.css';
import Home from '../pages/Home';
import Login from '../pages/Login';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App({ profil }) {

  const [sideBar, setSideBar] = useState(false);
  const [filmBanner, setfilmBanner] = useState(1);
  const [userLoged, setUserLoged] = useState({});
  console.log(userLoged);


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login setUserLoged={setUserLoged} />} />
        <Route path='/Home' element={<Home setSideBar={setSideBar} sideBar={sideBar} filmBanner={filmBanner} setfilmBanner={setfilmBanner} profil={profil} userLoged={userLoged} />} />
      </Routes>
    </div>
  );
}

export default App;
