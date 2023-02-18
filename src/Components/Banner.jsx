import '../css/Banner.css';
import catalogue from '../data/catalogue.json';


function Banner({ filmBanner }) {
    let bannerToDisplay = catalogue.filter(film => film.id === filmBanner);

    return (
        <div className="banner d-flex ">
            <div className="banner-content">
                <h1 className="banner-title">{bannerToDisplay[0].nom}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Lire</button>
                    <button className="banner-button">Ma liste</button>
                </div>
                <h2 className="banner-description">{bannerToDisplay[0].description}</h2>
            </div>
            <div className="banner-img">
                <img src={'.' + bannerToDisplay[0].affiche} alt={bannerToDisplay[0].nom} />
            </div>
        </div >
    )
}

export default Banner;