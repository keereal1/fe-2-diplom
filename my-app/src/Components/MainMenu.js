import { ABOUT_ROUTE, SUPPORT_ROUTE, REVIEWS_ROUTE, CONTACTS_ROUTE} from '../routes/routes'
import { Link, useNavigate } from 'react-router-dom'
import { TRAIN_SELECT_ROUTE } from '../routes/routes'

export const MainMenu = () => {
    const navigate = useNavigate()

    return (
        <div className='header'>
        <div className="logo">
            "Logo"
        </div>
        <div className="menu-list">
            <ul className="menu-items">
                <li>
                    <Link to={ABOUT_ROUTE} className='menu-link'>О нас</Link>
                </li>
                <li>
                    <Link to={SUPPORT_ROUTE} className='menu-link'>Как это работает</Link>
                </li>
                <li>
                    <Link to={REVIEWS_ROUTE} className='menu-link'>Отзывы</Link>
                </li>
                <li>
                    <Link to={CONTACTS_ROUTE} className='menu-link'>Контакты</Link>
                </li>
            </ul>
        </div>
        <h2 className='main-title'>
            Вся жизнь - <span>Путешествие!</span>
        </h2>
        <form className="search-form">

            <div className="search-form__direction">
               <label htmlFor='direction' className="search-form__direction-title">Направление</label>
               <div className='search-form__direction-container'>
                    <input type="text" id="direction-from" placeholder="Откуда" className='search-form__direction-input'/>
                    <input type="text" id="direction-to" placeholder="Куда" className='search-form__direction-input'/>
                </div> 
            </div>
            <div className="search-form__date">
                <label htmlFor='date' className="search-form__date-title">Дата</label>
                <div className='search-date-container'>
                    <input type="date" id="date" placeholder="ДД/ММ/ГГГГ" className='search-form__date-input'/>
                    <input type="date" placeholder="ДД/ММ/ГГГГ" className='search-form__date-input'/>  
                </div> 
            </div>
            <button type="submit" className='search-form__button' onClick={() => navigate(TRAIN_SELECT_ROUTE)}>Найти билеты</button>
        </form>
        </div>
    )
}