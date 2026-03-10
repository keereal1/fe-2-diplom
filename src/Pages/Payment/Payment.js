import { useNavigate } from 'react-router-dom'
import { TICKET_CHECK_ROUTE } from '../../App/routes/routes';
import { TripDetails } from '../../Components/TripDetails';
import { PaymentForm } from '../../Components/PaymentForm';
import styles from './Payment.module.css';

export const Payment = () => {

   const navigate = useNavigate();

    return (
       <section className={styles['main-container']}>
          <ul className={styles['navbar']}>
            {/* //добавить wpr класс wrp__active */}
            <div className={styles['wrp', 'wrp__active']}>
               <li className={styles['navbar__link']}>
                  <span className={styles['navbar__link_number']}>1</span>
                  <a href='foo'className={styles['navbar__link_name']}>Билеты</a>
               </li>
               <img src='icons\navbar_arrow.svg' className={styles['navbar__arrow']}/>
            </div>
            <div className={styles['wrp', 'wrp__active']}>
               <li className={styles['navbar__link']}>
                  <span className={styles['navbar__link_number']}>2</span>
                  <a href='foo' className={styles['navbar__link_name']}>Пассажиры</a>
               </li>
               <img src='icons\navbar_arrow.svg' className={styles['navbar__arrow']}/>
             </div>
             <div className={styles['wrp', 'wrp__active']}>
               <li className={styles['navbar__link']}>
                  <span className={styles['navbar__link_number']}>3</span>
                  <a href='foo' className={styles['navbar__link_name']}>Оплата</a>
               </li>
               <img src='icons\navbar_arrow.svg' className={styles['navbar__arrow']}/>
             </div>
             <div className={styles['wrp']}>
               <li className={styles['navbar__link']}>
                  <span className={styles['navbar__link_number']}>4</span>
                  <a href='foo' className={styles['navbar__link_name']}>Проверка</a>
               </li>
             </div>
          </ul>
          <div className={styles['main-page']}>
            <aside className={styles['widget']}>
               <div className={styles['widget__header']}>
                     Детали поездки
               </div>
               <TripDetails/>
            </aside>
            <main className={styles['passengers']}>
                  <article className={styles['passenger']}>
                     <div className={styles['passenger__header']}>
                        <span className={styles['passenger__header-title']}>Персональные данные</span>                      
                     </div>   
                     <PaymentForm/>
                  </article>
                  <section className={styles['buy']}>
                     <button type='button' className={styles['buy__btn']} onClick={() => navigate(TICKET_CHECK_ROUTE)}>Купить билеты</button>
                  </section>
            </main>
          </div>
       </section>
    );
 };