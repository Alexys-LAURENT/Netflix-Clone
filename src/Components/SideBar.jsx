import '../css/SideBar.css'
import catalogue from '../data/catalogue.json'

function SideBar({ setSideBar, profil }) {

    const categories = [...new Set(catalogue.map(item => item.categories).flat())];


    return (
        <div className='Sidebar' onBlur={() => setSideBar(false)}>
            <div className='profilContainer d-flex'>
                <div className='d-flex profil'>
                    <img src={profil[0].profilPicture} width={80} height={80} alt='avatar'></img>
                    <h2>{profil[0].nom}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </div>
                <div className='close-sideBar d-flex' onClick={() => { setSideBar(false) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </div>
            </div>
            <div className='notifications d-flex'>
                <h3>Notifications</h3>
            </div>
            <div className='mesVideos d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                <h3>Mes vidéos</h3>
            </div>
            <div className='categories'>
                <div className='categorie d-flex categorie-active'>
                    <h3>Accueil</h3>
                </div>
                {categories.map((categorie, index) => {
                    return (
                        <div key={index} className='categorie d-flex'>
                            <h3>{categorie}</h3>
                        </div>
                    )
                })}


            </div>
        </div >
    );
}

export default SideBar;