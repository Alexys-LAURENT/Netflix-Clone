import '../css/App.css';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Banner from './Banner';
import RowCategorie from './RowCategorie';
import { useState } from 'react';

function App({ profil }) {


  {
    let CategoriesTop = document.getElementsByClassName('Row-container');
    console.log(CategoriesTop);
    CategoriesTop[0].style.top = -50 + 'px';
    for (let i = 2; i < CategoriesTop.length; i++) {
      CategoriesTop[i].style.top = -250 * (i - i / 2) + 'px';
    }
  }




  const [sideBar, setSideBar] = useState(false);
  const [filmBanner, setfilmBanner] = useState(1);
  return (
    <div className='Main'>
      {sideBar === true ? <SideBar setSideBar={setSideBar} profil={profil} /> : null}
      <div className='body'>
        <Navbar SideBar={sideBar} setSideBar={setSideBar} />
        <Banner filmBanner={filmBanner} />
        <RowCategorie categorieDisplay={"populaires"} setfilmBanner={setfilmBanner} />
        <RowCategorie categorieDisplay={"Drame"} setfilmBanner={setfilmBanner} />
        <RowCategorie categorieDisplay={"Horreur"} setfilmBanner={setfilmBanner} />
        <RowCategorie categorieDisplay={"Action"} setfilmBanner={setfilmBanner} />
        <RowCategorie categorieDisplay={"Historique"} setfilmBanner={setfilmBanner} />
        <RowCategorie categorieDisplay={"Science-fiction"} setfilmBanner={setfilmBanner} />
        <RowCategorie categorieDisplay={"Fantasy"} setfilmBanner={setfilmBanner} />





      </div>
    </div>
  );
}

export default App;
