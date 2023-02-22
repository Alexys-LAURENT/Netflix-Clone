import Navbar from '../Components/Navbar';
import SideBar from '../Components/SideBar';
import Banner from '../Components/Banner';
import RowCategorie from '../Components/RowCategorie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ sideBar, setSideBar, filmBanner, setfilmBanner, profil, userLoged }) {

    const navigate = useNavigate();
    if (userLoged.email === undefined) {
        navigate('/');
    }

    sideBar === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';


    useEffect(() => {
        let CategoriesTop = document.getElementsByClassName('Row-container');
        CategoriesTop[0].style.top = -50 + 'px';
        for (let i = 2; i < CategoriesTop.length; i++) {
            CategoriesTop[i].style.top = -250 * (i - i / 2) + 'px';
        }
    }, [])

    return (
        <div className='Main'>
            {sideBar === true ? <SideBar setSideBar={setSideBar} profil={profil} /> : null}
            <div className='body'>
                <Navbar SideBar={sideBar} setSideBar={setSideBar} />
                <Banner filmBanner={filmBanner} />
                {/* <div className='top'> */}
                <RowCategorie categorieDisplay={"populaires"} setfilmBanner={setfilmBanner} />
                <RowCategorie categorieDisplay={"Drame"} />
                <RowCategorie categorieDisplay={"Horreur"} />
                <RowCategorie categorieDisplay={"Action"} />
                <RowCategorie categorieDisplay={"Historique"} />
                <RowCategorie categorieDisplay={"Science-fiction"} />
                <RowCategorie categorieDisplay={"Fantasy"} />
                {/* </div> */}


            </div>
        </div>
    );
}

export default Home;