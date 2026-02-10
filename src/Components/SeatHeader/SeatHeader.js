import { ABOUT_ROUTE, SUPPORT_ROUTE, REVIEWS_ROUTE, CONTACTS_ROUTE} from '../../App/routes/routes'
import styles from './SeatHeader.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { TRAIN_SELECT_ROUTE } from '../../App/routes/routes'

export const SeatHeader = () => {
    const navigate = useNavigate()

    return (
        <div className={styles['header']}>
            <div className={styles['logo']}>
                Лого
            </div>
            <div className={styles['menu-list']}>
                <ul className={styles['menu-items']}>
                    <li>
                        <Link to={ABOUT_ROUTE} className={styles['menu-link']}>О нас</Link>
                    </li>
                    <li>
                        <Link to={SUPPORT_ROUTE} className={styles['menu-link']}>Как это работает</Link>
                    </li>
                    <li>
                        <Link to={REVIEWS_ROUTE} className={styles['menu-link']}>Отзывы</Link>
                    </li>
                    <li>
                        <Link to={CONTACTS_ROUTE} className={styles['menu-link']}>Контакты</Link>
                    </li>
                </ul>
            </div>

            <form className={styles['search-form']}>
                <div className={styles['search-form_info']}>
                    <div className={styles['search-form__direction']}>
                        <label htmlFor='direction' className={styles['search-form__direction-title']}>Направление</label>
                        <div className={styles['search-form__direction-container']}>
                            <img src='icons\header_location_icon.svg' className={styles['header_location_icon']}/>
                            <input type="text" id="direction-from" placeholder="Откуда" className={styles['search-form__direction-input']}/>
                            <img src='icons\header_rotate_icon.svg' className={styles['rotate_icon']}/>
                            <img src='icons\header_location_icon.svg' className={styles['header_location_icon-second']}/>
                            <input type="text" id="direction-to" placeholder="Куда" className={styles['search-form__direction-input']}/>
                        </div> 
                    </div>
                    <div className={styles['search-form__date']}>
                        <label htmlFor='date' className={styles['search-form__date-title']}>Дата</label>
                        <div className={styles['search-date-container']}>
                            <input type="date" id="date" placeholder="ДД/ММ/ГГГГ"  className={styles['search-form__date-input']}/>
                            <input type="date" id="date" placeholder="ДД/ММ/ГГГГ" className={styles['search-form__date-input']}/>
                        </div> 
                    </div>
                </div>
                <button type="submit" className={styles['search-form__button']} onClick={() => navigate(TRAIN_SELECT_ROUTE)}>Найти билеты</button>
            </form>
        </div>
    )
}