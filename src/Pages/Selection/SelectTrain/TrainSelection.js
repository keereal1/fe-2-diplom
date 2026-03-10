import styles from './TrainSelection.module.css'
import { RoutesFilter } from '../../../Components/RoutesFilter/RoutesFilter';
import { LastTickets } from '../../../Components/LastTickets';
import { TrainPrewiev } from '../../../Components/TrainPrewiev';

export const TrainSelection = () => {

    return (
       <section className={styles['main-container']}>
          <ul className={styles['navbar']}>
            <div className={styles['wrp', 'wrp__active']}>
               <li className={styles['navbar__link']}>
                  <span className={styles['navbar__link_number']}>1</span>
                  <a href='foo'className={styles['navbar__link_name']}>Билеты</a>
               </li>
               <img src='icons\navbar_arrow.svg' className={styles['navbar__arrow']}/>
            </div>
            <div className={styles['wrp']}>
               <li className={styles['navbar__link']}>
                  <span className={styles['navbar__link_number']}>2</span>
                  <a href='foo' className={styles['navbar__link_name']}>Пассажиры</a>
               </li>
               <img src='icons\navbar_arrow.svg' className={styles['navbar__arrow']}/>
             </div>
             <div className={styles['wrp']}>
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
            <aside className={styles['side']}>
               <RoutesFilter/>
               <section className={styles['last-tickets']}>
                  <h3 className={styles['last-tickets__title']}>
                     Последние билеты
                  </h3>
                  <LastTickets/>
               </section>
            </aside>

            <main className={styles['trains']}>
                  <div className={styles['trains__header']}>
                     <p className={styles['trains__header-text']}>найдено</p>
                     <p className={styles['trains__header-text']}>отсортировать по: <span className={styles['trains__header-sort']}>времени</span></p>
                     <p className={styles['trains__header-text']}>показывать по:<span className={styles['trains__header-show']}>5</span></p>
                  </div>
                  <TrainPrewiev/>
                  <TrainPrewiev/>
                  <TrainPrewiev/>
                  <TrainPrewiev/>
                  <TrainPrewiev/>
                  <section className={styles['pages']}>
                     <ul className={styles['pages__list']}>
                        <li className={styles['pages__item']}>
                           <img src='icons/pages__left-arrow.svg' className={styles['pages__arrow']}></img>
                        </li>
                        <li className={styles['pages__item', 'active-page']}>1</li>
                        <li className={styles['pages__item']}>2</li>
                        <li className={styles['pages__item']}>3</li>
                        <li className={styles['pages__item']}>
                           <img src='icons/pages__right-arrow.svg' className={styles['pages__arrow']}></img>
                        </li>
                     </ul>
                  </section>
            </main>
          </div>
       </section>
    );
 };