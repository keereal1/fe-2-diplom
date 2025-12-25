import styles from './SeatSelection.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { TRAIN_SELECT_ROUTE } from '../../../App/routes/routes';
import { PASSENGER_FORM_ROUTE } from '../../../App/routes/routes';


export const SeatSelection = () => {

   const navigate = useNavigate();

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
               <form className={styles['widget__form']}>
                  <div className={styles['input__container']}>
                     <label htmlFor='trip' className={styles['input__label']}>
                        Дата поездки
                     </label>
                     <input type='date' id='trip' className={styles['input']} />
                  </div>
                  <div className={styles['input__container']}>
                     <label htmlFor='arrival' className={styles['input__label']}>
                        Дата возвращения
                     </label>
                     <input type='date' id='arrival' className={styles['input']} />
                  </div>
               </form>
               <form className={styles['widget__options']}>
                  <div className={styles['widget__option']}>
                     <img
                        src='icons/coupe-icon.svg'
                        alt='coupe icon'
                        className={styles['widget__option-icon']}
                     />
                     <span className={styles['widget__option-text']}>Купе</span>
                     <div className={styles['toggle__container']}>
                        <input
                           type='checkbox'
                           id='toggle'
                           className={styles['toggle__input']}
                           hidden
                        />
                        <label htmlFor='toggle' className={styles['toggle__label']}></label>
                     </div>
                  </div>
                  <div className={styles['widget__option']}>
                     <img
                        src='icons/platskart-icon.svg'
                        alt='coupe icon'
                        className={styles['widget__option-icon']}
                     />
                     <span className={styles['widget__option-text']}>Плацкарт</span>
                     <div className={styles['toggle__container']}>
                        <input
                           type='checkbox'
                           id='toggle'
                           className={styles['toggle__input']}
                           hidden
                        />
                        <label htmlFor='toggle' className={styles['toggle__label']}></label>
                     </div>
                  </div>
                  <div className={styles['widget__option']}>
                     <img
                        src='icons/siting-icon.svg'
                        alt='coupe icon'
                        className={styles['widget__option-icon']}
                     />
                     <span className={styles['widget__option-text']}>Сидячий</span>
                     <div className={styles['toggle__container']}>
                        <input
                           type='checkbox'
                           id='toggle'
                           className={styles['toggle__input']}
                           hidden
                        />
                        <label htmlFor='toggle' className={styles['toggle__label']}></label>
                     </div>
                  </div>
                  <div className={styles['widget__option']}>
                     <img
                        src='icons/lux-icon.svg'
                        alt='coupe icon'
                        className={styles['widget__option-icon']}
                     />
                     <span className={styles['widget__option-text']}>Люкс</span>
                     <div className={styles['toggle__container']}>
                        <input
                           type='checkbox'
                           id='toggle'
                           className={styles['toggle__input']}
                           hidden
                        />
                        <label htmlFor='toggle' className={styles['toggle__label']}></label>
                     </div>
                  </div>
                  <div className={styles['widget__option']}>
                     <img
                        src='icons/wifi-icon.svg'
                        alt='coupe icon'
                        className={styles['widget__option-icon']}
                     />
                     <span className={styles['widget__option-text']}>WI-FI</span>
                     <div className={styles['toggle__container']}>
                        <input
                           type='checkbox'
                           id='toggle'
                           className={styles['toggle__input']}
                           hidden
                        />
                        <label htmlFor='toggle' className={styles['toggle__label']}></label>
                     </div>
                  </div>
                  <div className={styles['widget__option']}>
                     <img
                        src='/icons/rocket-icon.svg'
                        alt='coupe icon'
                        className={styles['widget__option-icon']}
                     />
                     <span className={styles['widget__option-text']}>Экспресс</span>
                     <div className={styles['toggle__container']}>
                        <input
                           type='checkbox'
                           id='toggle'
                           className={styles['toggle__input']}
                           hidden
                        />
                        <label htmlFor='toggle' className={styles['toggle__label']}></label>
                     </div>
                  </div>
               </form>
               <form className={styles['widget__price']}>
                  <div className={styles['widget__price-content']}>
                     <span className={styles['widget__price-title']}>Стоимость</span>
                     <div className={styles['widget__slider']}>
                        <span>от</span>
                        <span>до</span>
                     </div>
                     <div className={styles['widget__rangeslider']}>
                        <input
                           type='range'
                           name='range'
                           min='1920'
                           max='7000'
                           defaultValue='1920'
                           className={styles['input-ranges']}
                        />
                     </div>
                     <div className={styles['value-labels']}>
                        <span className={styles['min-value']}>1920</span>
                        <span className={styles['max-value']}>7000</span>
                     </div>
                  </div>
               </form>
               <div className={styles['widget__there']}>
                  <div className={styles['widget__there-header']}>
                     <img src='icons/widget_there_arrow.svg' className={styles['widget__there-arrow']}></img>
                     <span className={styles['widget__there-title']}>Туда</span>
                     <img src='icons/widget__shrink.svg' className={styles['widget__shrink']}></img>
                  </div>
                  <div className={styles['widget__there-content']}>
                     <div className={styles['widget__departure-time']}>
                        <span className={styles['departure-time__title']}>Время отбытия</span>
                        <div className={styles['departure-time__rangeslider']}>
                           <input
                              type='range'
                              name='range'
                              min='0:00'
                              max='24:00'
                              defaultValue='11:00'
                              className={styles['input-ranges__time']}
                           />
                        </div>
                        <div className={styles['value-labels']}>
                           <span className={styles['min-value']}>0:00</span>
                           <span className={styles['max-value']}>24:00</span>
                        </div>
                     </div>
                     <div className={styles['widget__arrival-time']}>
                        <span className={styles['arrival-time__title']}>Время прибытия</span>
                        <div className={styles['arrival-time__rangeslider']}>
                           <input
                              type='range'
                              name='range'
                              min='0:00'
                              max='24:00'
                              defaultValue='11:00'
                              className={styles['input-ranges__time']}
                           />
                        </div>
                        <div className={styles['value-labels']}>
                           <span className={styles['min-value']}>0:00</span>
                           <span className={styles['max-value']}>24:00</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles['widget__back']}>
                  <div className={styles['widget__back-header']}>
                     <img src='icons/widget_back_arrow.svg' className={styles['widget__back-arrow']}></img>
                     <span className={styles['widget__there-title']}>Обратно</span>
                     <img src='icons/widget__shrink.svg' className={styles['widget__shrink']}></img>
                  </div>
                  <div className={styles['widget__back-content']}>
                     <div className={styles['departure-time']}>
                        <span className={styles['departure-time__title']}>Время отбытия</span>
                        <div className={styles['departure-time__rangeslider']}>
                           <input
                              type='range'
                              name='range'
                              min='0:00'
                              max='24:00'
                              defaultValue='11:00'
                              className={styles['input-ranges__time']}
                           />
                        </div>
                        <div className={styles['value-labels']}>
                           <span className={styles['min-value']}>0:00</span>
                           <span className={styles['max-value']}>24:00</span>
                        </div>
                     </div>
                     <div className={styles['arrival-time']}>
                        <span className={styles['arrival-time__title']}>Время прибытия</span>
                        <div className={styles['arrival-time__rangeslider']}>
                           <input
                              type='range'
                              name='range'
                              min='0:00'
                              max='24:00'
                              defaultValue='11:00'
                              className={styles['input-ranges__time']}
                           />
                        </div>
                        <div className={styles['value-labels']}>
                           <span className={styles['min-value']}>0:00</span>
                           <span className={styles['max-value']}>24:00</span>
                        </div>
                     </div>
                  </div>
               </div>
            </aside>
            <main className={styles['seats']}>
                  <h3 className={styles['seats__header']}>Выбор мест</h3>
                  <article className={styles['seats__option']}>   
                     <div className={styles['seats__option-header']}>
                        <img src='icons/seats-arrow.svg'  className={styles['seats__option-arrow']}/>
                        <button className={styles['back-to-trains__btn']} onClick={() => navigate(TRAIN_SELECT_ROUTE)}>Выбрать другой поезд</button>
                     </div>
                     <div className={styles['train__info']}>
                     <img src='icons/train-info-logo.svg' alt='train' className={styles['train__logo']}/>
                        <div className={styles['train__info-train']}>
                           <span className={styles['train__number']}>116C</span>
                           <div className={styles['train__route']}> 
                              <span className={styles['start']}>Адлер</span>
                              <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> <br/>
                              Москва <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> <br/>
                              Санкт-Петербург
                           </div>
                        </div>
                           <div className={styles['train__info-stations']}>
                              <div className={styles['train__from']}>
                                 <div className={styles['departure-time']}>00:10</div>
                                 <div className={styles['departure-city']}>Москва</div>
                                 <div className={styles['departure-station']}>Курский вокзал</div>
                              </div>
                              <img src='icons/arrow__train-dir.svg' className={styles['travel-time__arrow']}/>
                              <div className={styles['train__to']}>
                                 <div className={styles['departure-time']}>09:52</div>
                                 <div className={styles['departure-city']}>Санкт-Петербург</div>
                                 <div className={styles['departure-station']}>Ладожский вокзал</div>
                              </div>
                        </div>
                        <div className={styles['travel-time']}>
                           <img src='icons/clock-logo.svg' className={styles['clock__logo']}/>
                           <div className={styles['time']}>9 часов <br/> 42 минуты</div>
                        </div>
                     </div>
                     <div className={styles['tickets']}>
                        <div className={styles['tickets__title']}>Количество билетов</div>
                        <div className={styles['tickets__types']}>
                           <div className={styles['ticket']}>
                              <input type='text' className={styles['quantity']} name='quantity' value='Взрослых'/>
                              <div className={styles['hint']}>
                              Можно добавить еще 3 пассажиров 
                              </div>
                           </div>
                           <div className={styles['ticket', 'ticket-active']}>
                              <input type='text' className={styles['quantity']} name='quantity' value='Детских'/>
                              <div className={styles['hint']}>
                                 Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
                              </div>
                           </div>
                           <div className={styles['ticket']}>
                              <input type='text' className={styles['quantity']} name='quantity' value='Детских "Без места"'/>
                           </div>
                        </div>
                     </div>
                     <div className={styles['wagon']}>
                        <div className={styles['wagon__title']}>
                           Тип вагона
                        </div>
                        <div className={styles['wagon__types']}>
                           <div className={styles['type']}>
                              <img src='icons/wagon__type-sit.svg' className={styles['type__logo-sit']}/>
                              <span className={styles['type__name']}>Сидячий</span>
                           </div>
                           <div className={styles['type']}>
                              <img src='icons/wagon__type-plats.svg' className={styles['type__logo-plats']}/>
                              <span className={styles['type__name']}>Плацкарт</span>
                           </div>
                           <div className={styles['type']}>
                              <img src='icons/wagon__type-coupe.svg' className={styles['type__logo-coupe']}/>
                              <span className={styles['type__name']}>Купе</span>
                           </div>
                           <div className={styles['type']}>
                              <img src='icons/wagon__type-lux.svg' className={styles['type__logo-lux']}/>
                              <span className={styles['type__name']}>Люкс</span>
                           </div>
                        </div>
                        <div className={styles['wagon__info']}>
                           <div className={styles['number']}>
                           Вагоны
                           <span className={styles['current']}>07</span> 
                           <span className={styles['all']}>09</span>
                           </div>
                           <div className={'numbering__info'}>
                              Нумерация вагонов начинается с головы поезда
                           </div>
                        </div>
                        <div className={styles['selected-wagon']}>
                           <div className={styles['selected-wagon__title']}>
                              <span className={styles['selected-wagon__number']}>
                              07
                              </span>
                              <span className={styles['selected-wagon__text']}>
                                 вагон
                              </span>
                           </div>
                           <div className={styles['wagon-seats']}>
                              <div className={styles['number-of-seats__container']}>
                                 <span className={styles['number-of-seats']}>
                                    Места <span className={styles['amount']}>11</span>
                                 </span>
                                 <span className={styles['top']}>
                                    Верхние <span className={styles['top-amount']}>3</span>
                                 </span>
                                 <span className={styles['bottom']}>
                                    Нижние <span className={styles['bottom-amount']}>8</span>
                                 </span>
                              </div>
                              <div className={styles['price__container']}>
                                 <span className={styles['price']}>
                                    Стоимость
                                 </span>
                                 <span className={styles['top-price']}>
                                    2 920 <img src='icons/currency__trains.svg' className={styles['currency-icon']}/>
                                 </span>
                                 <span className={styles['bottom-price']}>
                                    3 530 <img src='icons/currency__trains.svg' className={styles['currency-icon']}/>
                                 </span>
                              </div>
                              <div className={styles['additional-info']}>
                                 <span className={styles['service']}>
                                    Обслуживание ФПК
                                 </span>
                                 <div className={styles['facilities']}>
                                    <img src='icons/wagon__ac.svg' className='ac__icon' title='Кондиционер'/>
                                    <img src='icons/wagon__wifi.svg' className='wifi__icon'/>
                                    <img src='icons/wagon__bed.svg' className='bed__icon'/>
                                    <img src='icons/wagon__coffee.svg' className='coffee__icon'/>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={styles['another-orders']}>
                           11 человек выбирают места в этом поезде
                        </div>
                        <img src='icons/wagon-icon.svg' className={styles['wagon-img']}/>
                     </div>
                  </article>
                  <article className={styles['seats__option-back']}>   
                     <div className={styles['seats__option-header-back']}>
                        <img src='icons/seats-arrow-back.svg'  className={styles['seats__option-arrow']}/>
                        <button className={styles['back-to-trains__btn']} onClick={() => navigate(TRAIN_SELECT_ROUTE)}>Выбрать другой поезд</button>
                     </div>
                     <div className={styles['train__info']}>
                     <img src='icons/train-info-logo.svg' alt='train' className={styles['train__logo']}/>
                        <div className={styles['train__info-train']}>
                           <span className={styles['train__number']}>116C</span>
                           <div className={styles['train__route']}> 
                              <span className={styles['start']}>Адлер</span>
                              <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> <br/>
                              Москва <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> <br/>
                              Санкт-Петербург
                           </div>
                        </div>
                           <div className={styles['train__info-stations']}>
                              <div className={styles['train__from']}>
                                 <div className={styles['departure-time']}>00:10</div>
                                 <div className={styles['departure-city']}>Москва</div>
                                 <div className={styles['departure-station']}>Курский вокзал</div>
                              </div>
                              <img src='icons/arrow__train-dir.svg' className={styles['travel-time__arrow-reverse']}/>
                              <div className={styles['train__to']}>
                                 <div className={styles['departure-time']}>09:52</div>
                                 <div className={styles['departure-city']}>Санкт-Петербург</div>
                                 <div className={styles['departure-station']}>Ладожский вокзал</div>
                              </div>
                        </div>
                        <div className={styles['travel-time']}>
                           <img src='icons/clock-logo.svg' className={styles['clock__logo']}/>
                           <div className={styles['time']}>9 часов <br/> 42 минуты</div>
                        </div>
                     </div>
                     <div className={styles['tickets']}>
                        <div className={styles['tickets__title']}>Количество билетов</div>
                        <div className={styles['tickets__types']}>
                           <div className={styles['ticket']}>
                              <input type='text' className={styles['quantity']} name='quantity' value='Взрослых'/>
                              <div className={styles['hint']}>
                              Можно добавить еще 3 пассажиров 
                              </div>
                           </div>
                           <div className={styles['ticket', 'ticket-active']}>
                              <input type='text' className={styles['quantity']} name='quantity' value='Детских'/>
                              <div className={styles['hint']}>
                                 Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
                              </div>
                           </div>
                           <div className={styles['ticket']}>
                              <input type='text' className={styles['quantity']} name='quantity' value='Детских "Без места"'/>
                           </div>
                        </div>
                     </div>
                     <div className={styles['wagon']}>
                        <div className={styles['wagon__title']}>
                           Тип вагона
                        </div>
                        <div className={styles['wagon__types']}>
                           <div className={styles['type']}>
                              <img src='icons/wagon__type-sit.svg' className={styles['type__logo-sit']}/>
                              <span className={styles['type__name']}>Сидячий</span>
                           </div>
                           <div className={styles['type']}>
                              <img src='icons/wagon__type-plats.svg' className={styles['type__logo-plats']}/>
                              <span className={styles['type__name']}>Плацкарт</span>
                           </div>
                           <div className={styles['type']}>
                              <img src='icons/wagon__type-coupe.svg' className={styles['type__logo-coupe']}/>
                              <span className={styles['type__name']}>Купе</span>
                           </div>
                           <div className={styles['type']}>
                              <img src='icons/wagon__type-lux.svg' className={styles['type__logo-lux']}/>
                              <span className={styles['type__name']}>Люкс</span>
                           </div>
                        </div>
                        <div className={styles['wagon__info']}>
                           <div className={styles['number']}>
                           Вагоны
                           <span className={styles['current']}>07</span> 
                           <span className={styles['all']}>09</span>
                           </div>
                           <div className={'numbering__info'}>
                              Нумерация вагонов начинается с головы поезда
                           </div>
                        </div>
                        <div className={styles['selected-wagon']}>
                           <div className={styles['selected-wagon__title']}>
                              <span className={styles['selected-wagon__number']}>
                              07
                              </span>
                              <span className={styles['selected-wagon__text']}>
                                 вагон
                              </span>
                           </div>
                           <div className={styles['wagon-seats']}>
                              <div className={styles['number-of-seats__container']}>
                                 <span className={styles['number-of-seats']}>
                                    Места <span className={styles['amount']}>11</span>
                                 </span>
                                 <span className={styles['top']}>
                                    Верхние <span className={styles['top-amount']}>3</span>
                                 </span>
                                 <span className={styles['bottom']}>
                                    Нижние <span className={styles['bottom-amount']}>8</span>
                                 </span>
                              </div>
                              <div className={styles['price__container']}>
                                 <span className={styles['price']}>
                                    Стоимость
                                 </span>
                                 <span className={styles['top-price']}>
                                    2 920 <img src='icons/currency__trains.svg' className={styles['currency-icon']}/>
                                 </span>
                                 <span className={styles['bottom-price']}>
                                    3 530 <img src='icons/currency__trains.svg' className={styles['currency-icon']}/>
                                 </span>
                              </div>
                              <div className={styles['additional-info']}>
                                 <span className={styles['service']}>
                                    Обслуживание ФПК
                                 </span>
                                 <div className={styles['facilities']}>
                                    <img src='icons/wagon__ac.svg' className='ac__icon' title='Кондиционер'/>
                                    <img src='icons/wagon__wifi.svg' className='wifi__icon'/>
                                    <img src='icons/wagon__bed.svg' className='bed__icon'/>
                                    <img src='icons/wagon__coffee.svg' className='coffee__icon'/>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={styles['another-orders']}>
                           11 человек выбирают места в этом поезде
                        </div>
                        <img src='icons/wagon-icon.svg' className={styles['wagon-img']}/>
                     </div>
                  </article>
                  <section className={styles['to-form']}>
                     <button type='button' className={styles['to-form__btn']} onClick={() => navigate(PASSENGER_FORM_ROUTE)}>Далее</button>
                  </section>
            </main>
          </div>
       </section>
    );
 };