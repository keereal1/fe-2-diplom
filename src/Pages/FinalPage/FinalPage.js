import styles from './FinalPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { Header } from '../../Components/Header';

export const FinalPage = () => {

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
            <main className={styles['ticket']}>
                  <article className={styles['train__option']}>
                     <div className={styles['ticket__header']}>
                        <span className={styles['ticket__header-title']}>Поезд</span>                      
                     </div>
                     <div className={styles['ticket__info']}>
                        <div className={styles['train__option-side']}>
                           <div className={styles['train__logo-container']}>
                              <img src='icons/train_train-select.svg' alt='train' className={styles['train__logo']}/>
                           </div>
                           <span className={styles['train__option-number']}>116C</span>
                           <div className={styles['train__option-route']}>
                              <span className={styles['start']}>Адлер</span>
                              <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> <br/>
                              Москва <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> <br/>
                              Санкт-Петербург
                           </div>
                        </div>
                        <div className={styles['train__option_direction']}>
                           <div className={styles['train__option_direction-top']}>
                              <div className={styles['train__from']}>
                                 <div className={styles['departure-time']}>00:10</div>
                                 <div className={styles['departure-city']}>Москва</div>
                                 <div className={styles['departure-station']}>Курский вокзал</div>
                              </div>
                              <div className={styles['travel-time']}>
                                 <div className={styles['time']}>09:42</div>
                                 <img src='icons/arrow__train-dir.svg' className={styles['travel-time__arrow']}/>
                              </div>
                              <div className={styles['train__to']}>
                                 <div className={styles['departure-time']}>09:52</div>
                                 <div className={styles['departure-city']}>Санкт-Петербург</div>
                                 <div className={styles['departure-station']}>Ладожский вокзал</div>
                              </div>
                           </div>
                           <div className={styles['train__option_direction-bottom']}>
                              <div className={styles['train__from']}>
                                 <div className={styles['departure-time']}>00:10</div>
                                 <div className={styles['departure-city']}>Москва</div>
                                 <div className={styles['departure-station']}>Курский вокзал</div>
                              </div>
                              <div className={styles['travel-time']}>
                                 <div className={styles['time']}>09:42</div>
                                 <img src='icons/arrow__train-dir.svg' className={styles['travel-time__arrow-reverse']}/>
                              </div>
                              <div className={styles['train__to']}>
                                 <div className={styles['departure-time']}>09:52</div>
                                 <div className={styles['departure-city']}>Санкт-Петербург</div>
                                 <div className={styles['departure-station']}>Ладожский вокзал</div>
                              </div>
                           </div>
                        </div>
                        <div className={styles['train__option_options']}>
                           <div className={styles['train__option_item']}>
                              <div className={styles['train__type']}>Сидячий</div>
                              <div className={styles['seats-available']}>88</div>
                              <div className={styles['price']}>
                                 от <span className={styles['price__value']}>1920</span>
                                 <img src='icons/currency__trains.svg' className={styles['currency-icon']}/>
                              </div>
                           </div>
                           <div className={styles['train__option_item']}>
                              <div className={styles['train__type']}>Плацкарт</div>
                              <div className={styles['seats-available']}>88</div>
                              <div className={styles['price']}>
                                 от <span className={styles['price__value']}>1920</span>
                                 <img src='icons/currency__trains.svg' className={styles['currency-icon']}/>
                              </div>
                           </div>
                           <div className={styles['train__option_item']}>
                              <div className={styles['train__type']}>Купе</div>
                              <div className={styles['seats-available']}>88</div>
                              <div className={styles['price']}>
                                 от <span className={styles['price__value']}>1920</span>
                                 <img src='icons/currency__trains.svg' className={styles['currency-icon']}/>
                              </div>
                           </div>
                           <div className={styles['train__option_item']}>
                              <div className={styles['train__type']}>Люкс</div>
                              <div className={styles['seats-available']}>88</div>
                              <div className={styles['price']}>
                                 от <span className={styles['price__value']}>1920</span>
                                 <img src='icons/currency__trains.svg' className={styles['currency-icon']}/>
                              </div>
                           </div>
                           <img src='icons/train_carriage-icons.svg' className={styles['carriage-icons']}/>
                           <button type='button' className={styles['change__btn']}>Изменить</button>
                        </div>
                     </div>  
                  </article>
                  <article className={styles['passengers']}>
                     <div className={styles['ticket__header']}>
                        <span className={styles['passengers__header-title']}>Пассажиры</span>                      
                     </div> 
                     <div className={styles['passengers__content']}>
                        <div className={styles['passengers__list']}>
                           <div className={styles['passenger__item']}>
                              <div className={styles['ticket__type']}>
                                 <img src='icons/ticket__person.svg'/>
                                 <span className={styles['type']}>Взрослый</span>
                              </div>
                              <div className={styles['passenger__item-info']}>
                                 <span className={styles['name']}>Мартынюк Ирина Эдуардовна</span>
                                 <span className={styles['sex']}>Пол женский</span>
                                 <span className={styles['birth-date']}>Дата рождения 17.02.1985</span>
                                 <span className={styles['document']}>Паспорт РФ 4204 380694</span>
                              </div>
                           </div>
                           <div className={styles['passenger__item']}>
                              <div className={styles['ticket__type']}>
                                 <img src='icons/ticket__person.svg'/>
                                 <span className={styles['type']}>Взрослый</span>
                              </div>
                              <div className={styles['passenger__item-info']}>
                                 <span className={styles['name']}>Мартынюк Ирина Эдуардовна</span>
                                 <span className={styles['sex']}>Пол женский</span>
                                 <span className={styles['birth-date']}>Дата рождения 17.02.1985</span>
                                 <span className={styles['document']}>Паспорт РФ 4204 380694</span>
                              </div>
                           </div>
                           <div className={styles['passenger__item']}>
                              <div className={styles['ticket__type']}>
                                 <img src='icons/ticket__person.svg'/>
                                 <span className={styles['type']}>Детский</span>
                              </div>
                              <div className={styles['passenger__item-info']}>
                                 <span className={styles['name']}>Мартынюк Ирина Эдуардовна</span>
                                 <span className={styles['sex']}>Пол женский</span>
                                 <span className={styles['birth-date']}>Дата рождения 17.02.1985</span>
                                 <span className={styles['document']}>Паспорт РФ 4204 380694</span>
                              </div>
                           </div>
                        </div>
                        <div className={styles['ticket__total']}>
                           <div className={styles['total-cost']}>
                              <span className={styles['total-cost__text']}>Всего</span>
                              <span className={styles['total-cost__amount']}>7 760</span>
                              <img src='icons/currency__icon_total.svg' className={styles['total-cost__currency']}/>
                           </div>
                           <button type='button' className={styles['change__btn']}>Изменить</button>
                        </div>
                     </div>
                  </article>
                  <article className={styles['payment']}>
                     <div className={styles['ticket__header']}>
                        <span className={styles['passengers__header-title']}>Способ оплаты</span>                      
                     </div> 
                     <div className={styles['payment__content']}>
                        <div className={styles['payment__type']}>
                           Наличными
                        </div>
                        <div className={styles['ticket__total']}>
                           <button type='button' className={styles['change__btn']}>Изменить</button>
                        </div>
                     </div>
                  </article>
                  <section className={styles['confirm']}>
                     <button type='button' className={styles['confirm__btn']}>Вернуться на главную</button>
                  </section>
            </main>
          </div>
       </section>
    );
 };