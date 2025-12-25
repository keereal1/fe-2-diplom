import styles from './PaymentForm.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { TICKET_CHECK_ROUTE } from '../../App/routes/routes';

export const PaymentForm = () => {

   const navigate = useNavigate();

   const onSelect = (e) => {
      console.log(e.target.value)
   }

   const onChange = (e) => {
      const name = e.currentTarget;
      name.className.add('checked');
      return console.log(name)
   }

    return (
       <section className={styles['main-container']}>
          <ul className={styles['navbar']}>
             <li className={styles['navbar__link']}>
                <span className={styles['navbar__link_number']}>1</span>
                <a href='foo'>Билеты</a>
             </li>
             <li className={styles['navbar__link']}>
                <span className={styles['navbar__link_number']}>2</span>
                <a href='foo'>Пассажиры</a>
             </li>
             <li className={styles['navbar__link']}>
                <span className={styles['navbar__link_number']}>3</span>
                <a href='foo'>Оплата</a>
             </li>
             <li className={styles['navbar__link']}>
                <span className={styles['navbar__link_number']}>4</span>
                <a href='foo'>Проверка</a>
             </li>
          </ul>
          <div className={styles['main-page']}>
            <aside className={styles['widget']}>
               <div className={styles['widget__header']}>
                     Детали поездки
               </div>
               <div className={styles['widget__there']}>
                  <div className={styles['widget__there-header']}>
                     <img src='icons/widget_there_arrow.svg' className={styles['widget__there-arrow']}></img>
                     <span className={styles['widget__there-title']}>Туда</span>
                     <span className={styles['widget__there-date']}>30.08.2018</span>
                     <img src='icons/widget__shrink.svg' className={styles['widget__shrink']}/>
                  </div>
                  <div className={styles['widget__there-content']}>
                     <div className={styles['widget__train']}>
                        <div className={styles['train__number']}>
                           <span className={styles['number-text']}>№ Поезда</span>
                           <span className={styles['number']}>116С</span>                         
                        </div>
                        <div className={styles['train__route']}>
                           <span className={styles['route-text']}>Название</span>
                           <span className={styles['route']}>Адлер<br/>Санкт-Петербург</span>                         
                        </div>
                        <div className={styles['train__time']}>
                           <div className={styles['departure']}>
                              <span className={styles['time']}>00:10</span>
                              <span className={styles['date']}>30.08.2018</span>
                           </div>
                           <div className={styles['travel-time']}>
                              <span className={styles['travel-time__value']}>9 : 42</span>
                              <img src='icons/arrow__train-dir.svg' className={styles['travel-time__arrow']}/>
                           </div>
                           <div className={styles['arrival']}>
                              <span className={styles['time']}>09:52</span>
                              <span className={styles['date']}>31.08.2018</span>
                           </div>                                           
                        </div>  
                        <div className={styles['train__stations']}>
                           <div className={styles['departure']}>
                              <span className={styles['city']}>Москва</span>
                              <span className={styles['station']}>Курский<br/>вокзал</span>
                           </div>
                           <div className={styles['arrival']}>
                              <span className={styles['city']}>Санкт-Петербург</span>
                              <span className={styles['station']}>Ладожский<br/>вокзал</span>
                           </div>                  
                        </div>                          
                     </div>
                  </div>
               </div>
               <div className={styles['widget__there']}>
                  <div className={styles['widget__there-header']}>
                  <img src='icons/widget_back_arrow.svg' className={styles['widget__back-arrow']}/>
                     <span className={styles['widget__there-title']}>Обратно</span>
                     <span className={styles['widget__there-date']}>30.08.2018</span>
                     <img src='icons/widget__shrink.svg' className={styles['widget__shrink']}/>
                  </div>
                  <div className={styles['widget__there-content']}>
                     <div className={styles['widget__train']}>
                        <div className={styles['train__number']}>
                           <span className={styles['number-text']}>№ Поезда</span>
                           <span className={styles['number']}>116С</span>                         
                        </div>
                        <div className={styles['train__route']}>
                           <span className={styles['route-text']}>Название</span>
                           <span className={styles['route']}>Адлер<br/>Санкт-Петербург</span>                         
                        </div>
                        <div className={styles['train__time']}>
                           <div className={styles['departure']}>
                              <span className={styles['time']}>00:10</span>
                              <span className={styles['date']}>30.08.2018</span>
                           </div>
                           <div className={styles['travel-time']}>
                              <span className={styles['travel-time__value']}>9 : 42</span>
                              <img src='icons/arrow__train-dir.svg' className={styles['travel-time__arrow']}/>
                           </div>
                           <div className={styles['arrival']}>
                              <span className={styles['time']}>09:52</span>
                              <span className={styles['date']}>31.08.2018</span>
                           </div>                                           
                        </div>  
                        <div className={styles['train__stations']}>
                           <div className={styles['departure']}>
                              <span className={styles['city']}>Москва</span>
                              <span className={styles['station']}>Курский<br/>вокзал</span>
                           </div>
                           <div className={styles['arrival']}>
                              <span className={styles['city']}>Санкт-Петербург</span>
                              <span className={styles['station']}>Ладожский<br/>вокзал</span>
                           </div>                  
                        </div>                          
                     </div>
                  </div>
               </div>
               <div className={styles['widget__passengers']}>
                  <div className={styles['widget__passengers-header']}>
                  <img src='icons/widget_passengers.svg' className={styles['widget__passenger-icon']}/>
                     <span className={styles['widget__there-title']}>Пассажиры</span>
                     <img src='icons/widget__shrink.svg' className={styles['widget__shrink']}/>
                  </div>
                  <div className={styles['widget__there-content']}>
                     <div className={styles['widget__tickets']}>
                        <div className={styles['adult-tickets']}>
                           <span className={styles['adult-tickets__text']}>2 Взрослых</span>
                           <span className={styles['adult-tickets__price']}>
                              5 840 
                              <img src='icons/currency__trains.svg' className={styles['currency-icon']}/>
                           </span>                         
                        </div>
                        <div className={styles['child-tickets']}>
                           <span className={styles['child-tickets__text']}>1 Ребенок</span>
                           <span className={styles['child-tickets__price']}>
                              1 920 
                              <img src='icons/currency__trains.svg' className={styles['currency-icon']}/>
                           </span>                         
                        </div>                        
                     </div>
                  </div>
               </div>
               <div className={styles['widget__total']}>
                     <span className={styles['widget__total-text']}>Итог</span>
                     <span className={styles['widget__total-value']}>
                        7 760
                        <img src='icons/currency__icon_total.svg' className={styles['currency-icon_total']}/>
                      </span>
               </div>
            </aside>
            <main className={styles['passengers']}>
                  <article className={styles['passenger']}>
                     <div className={styles['passenger__header']}>
                        <span className={styles['passenger__header-title']}>Персональные данные</span>                      
                     </div>   
                     <form className={styles['passenger__form']}>
                        <div className={styles['passenger__bio']}>
                           <div className={styles['fio']}>
                              <div className={styles['input__container']}>
                                 <label htmlFor='last-name' className={styles['input__label']}>Фамилия</label>
                                 <input type='text' id='last-name' name='last-name' className={styles['bio__input']}/>
                              </div>
                              <div className={styles['input__container']}>
                                 <label htmlFor='name' className={styles['input__label']}>Имя</label>
                                 <input type='text' id='name' name='name' className={styles['bio__input']}/>
                              </div>
                              <div className={styles['input__container']}>
                                 <label htmlFor='surname' className={styles['input__label']}>Отчество</label>
                                 <input type='text' id='surname' name='surname' className={styles['bio__input']}/>
                              </div>
                           </div>
                        </div>
                        <div className={styles['contact-info']}>
                           <div className={styles['input__container']}>
                              <label htmlFor='phone'>Контактный телефон</label>
                              <input type='tel' id='phone' name='phone' className={styles['phone__input']} placeholder='+7 ___ ___ __ __'/>
                           </div>
                           <div className={styles['input__container']}>
                              <label htmlFor='email'>E-mail</label>
                              <input type='email' id='email' name='email' className={styles['email__input']} placeholder='inbox@gmail.ru'/>
                           </div>
                        </div>
                        <div className={styles['payment__header']}>
                           <span className={styles['payment__header-title']}>Способ оплаты</span>                      
                        </div>
                        <div className={styles['online-payment']}>
                           <input type='checkbox' id='payment-type' name='online-payment'className={styles['payment-checkbox']}/>
                           <label htmlFor='payment-type' className={styles['payment-checkbox__label']}>Онлайн</label>
                        </div>
                           <ul className={styles['payment__list']}>
                              <li className={styles['payment__item']}>
                                 <a className={styles['payment__link']}>
                                    Банковской картой
                                 </a>
                              </li>
                              <li className={styles['payment__item']}>
                                 <a className={styles['payment__link']}>
                                    PayPal
                                 </a>
                              </li>
                              <li className={styles['payment__item']}>
                                 <a className={styles['payment__link']}>
                                    Visa QIWI Wallet
                                 </a>
                              </li>
                           </ul>
                        <div className={styles['cash-payment']}>
                           <input type='checkbox' id='payment-type' name='cash-payment' className={styles['payment-checkbox']}/>
                           <label htmlFor='payment-type' className={styles['payment-checkbox__label']}>Наличными</label>
                        </div>
                     </form>
                  </article>
                  <section className={styles['buy']}>
                     <button type='button' className={styles['buy__btn']} onClick={() => navigate(TICKET_CHECK_ROUTE)}>Купить билеты</button>
                  </section>
            </main>
          </div>
       </section>
    );
 };