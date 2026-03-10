import { ABOUT_ROUTE, SUPPORT_ROUTE, REVIEWS_ROUTE, CONTACTS_ROUTE} from '../App/routes/routes'
import { Link } from 'react-router-dom'
import { TicketSearchForm } from './TicketSearchForm'


export const Header = () => {


    return (
        <div className='header'>
        <div className="logo">
            Лого
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
        <TicketSearchForm/>
        </div>
    )
}