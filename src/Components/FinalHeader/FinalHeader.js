import { ABOUT_ROUTE, SUPPORT_ROUTE, REVIEWS_ROUTE, CONTACTS_ROUTE} from '../../App/routes/routes'
import styles from './FinalHeader.module.css'
import { Link, useNavigate } from 'react-router-dom'

export const FinalHeader = () => {
    const navigate = useNavigate()

    const onClick = (e) => {
        e.target.type = 'date';
        console.log(e.target)
    }

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
        </div>
    )
}