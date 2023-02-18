
import catalogue from '../data/catalogue.json';
import '../css/RowCategorie.css'

function RowCategorie({ categorieDisplay, setfilmBanner }) {

    let filmToDisplay = [];
    if (categorieDisplay === "populaires") {
        filmToDisplay = catalogue.filter(film => film.note >= 4);
    } else {
        filmToDisplay = catalogue.filter(film => film.categories.includes(categorieDisplay));
    }

    return (
        <div className='Row-container'>
            <h5>{categorieDisplay === "populaires" ? "Populaires sur netflix" : categorieDisplay}</h5>
            <div className='Row d-flex'>
                {filmToDisplay.map(film => (
                    <div className='Card' id={film.id + film.nom} onMouseOver={() => setfilmBanner(film.id)}>
                        <img src={'.' + film.affiche} alt={film.nom}></img>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default RowCategorie;