
import catalogue from '../data/catalogue.json';
import '../css/RowCategorie.css'

function RowCategorie({ categorieDisplay, setfilmBanner }) {

    let filmToDisplay = [];
    if (categorieDisplay === "populaires") {
        filmToDisplay = catalogue.filter(film => film.note >= 4);
    } else {
        filmToDisplay = catalogue.filter(film => film.categories.includes(categorieDisplay));
    }





    function swipeLeft(e) {
        let Row = e.target.parentNode.childNodes[2];
        //make Row scroll to the left smoothly
        if (Row.scrollLeft < Row.scrollWidth - Row.clientWidth) {
            e.target.parentNode.childNodes[1].style.display = 'block';
            Row.scrollTo({
                left: Row.scrollLeft + 800,
                behavior: 'smooth'
            });

            if (Row.scrollLeft >= Row.scrollWidth - Row.clientWidth) {
                e.target.style.display = 'none';
            }
        }
    }

    function swipeRight(e) {
        let Row = e.target.parentNode.childNodes[2];
        //make Row scroll to the right smoothly
        if (Row.scrollLeft > 0) {
            e.target.parentNode.childNodes[3].style.display = 'block';
            Row.scrollTo({
                left: Row.scrollLeft - 800,
                behavior: 'smooth'
            });

            //if Row scroll max is reached, hide the swipeRight button
            if (Row.scrollLeft <= 0) {
                e.target.style.display = 'none';
            }

        }
    }



    return (
        <div className='Row-container'>
            <h5>{categorieDisplay === "populaires" ? "Populaires sur netflix" : categorieDisplay}</h5>
            <div className='swipeLeft' onClick={(e) => swipeRight(e)}>A</div>
            <div className='Row d-flex'>
                {filmToDisplay.map(film => (
                    <div className='Card' id={film.id + film.nom} onMouseOver={() => setfilmBanner(film.id)}>
                        <img src={'.' + film.affiche} alt={film.nom}></img>
                    </div>
                ))
                }
            </div>
            <div className='swipeRight' onClick={(e) => swipeLeft(e)} >A</div>
        </div>
    )
}

export default RowCategorie;