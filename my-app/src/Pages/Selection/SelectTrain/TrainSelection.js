import styles from './TrainSelection.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { SEAT_SELECT_ROUTE } from '../../../App/routes/routes';

export const TrainSelection = () => {

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
                     <img src='icons/widget__expand.svg' className={styles['widget__expand']}></img>
                  </div>
               </div>
               <div className={styles['widget__back']}>
                  <div className={styles['widget__back-header']}>
                     <img src='icons/widget_back_arrow.svg' className={styles['widget__back-arrow']}></img>
                     <span className={styles['widget__there-title']}>Обратно</span>
                     <img src='icons/widget__expand.svg' className={styles['widget__expand']}></img>
                  </div>
               </div>
            </aside>
            <main className={styles['trains']}>
                  <div className={styles['trains__header']}>
                     <p className={styles['trains__header-text']}>найдено</p>
                     <p className={styles['trains__header-text']}>отсортировать по: <span className={styles['trains__header-sort']}>времени</span></p>
                     <p className={styles['trains__header-text']}>показывать по:<span className={styles['trains__header-show']}>5</span></p>
                  </div>
                  <article className={styles['train__option']}>
                     <div className={styles['train__option-side']}>
                        <div className={styles['train__logo-container']}>
                           <img src='icons/train_train-select.svg' alt='train' className={styles['train__logo']}/>
                        </div>
                        <span className={styles['train__number']}>116C</span>
                        <div className={styles['train__route']}>Адлер <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> Москва Санкт-Петербург</div>
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
                        <button type='button' className={styles['seats__select']} onClick={() => navigate(SEAT_SELECT_ROUTE)}>Выбрать места</button>
                     </div>
                  </article>
                  <article className={styles['train__option']}>
                  <div className={styles['train__option-side']}>
                        <div className={styles['train__logo-container']}>
                           <img src='icons/train_train-select.svg' alt='train' className={styles['train__logo']}/>
                        </div>
                        <span className={styles['train__number']}>116C</span>
                        <div className={styles['train__route']}>Адлер <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> Москва Санкт-Петербург</div>
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
                        <button type='button' className={styles['seats__select']} onClick={() => navigate(SEAT_SELECT_ROUTE)}>Выбрать места</button>
                     </div>
                  </article>
                  <article className={styles['train__option']}>
                  <div className={styles['train__option-side']}>
                        <div className={styles['train__logo-container']}>
                           <img src='icons/train_train-select.svg' alt='train' className={styles['train__logo']}/>
                        </div>
                        <span className={styles['train__number']}>116C</span>
                        <div className={styles['train__route']}>Адлер <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> Москва Санкт-Петербург</div>
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
                        <button type='button' className={styles['seats__select']} onClick={() => navigate(SEAT_SELECT_ROUTE)}>Выбрать места</button>
                     </div>
                  </article>
                  <article className={styles['train__option']}>
                  <div className={styles['train__option-side']}>
                        <div className={styles['train__logo-container']}>
                           <img src='icons/train_train-select.svg' alt='train' className={styles['train__logo']}/>
                        </div>
                        <span className={styles['train__number']}>116C</span>
                        <div className={styles['train__route']}>Адлер <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> Москва Санкт-Петербург</div>
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
                        <button type='button' className={styles['seats__select']} onClick={() => navigate(SEAT_SELECT_ROUTE)}>Выбрать места</button>
                     </div>
                  </article>
                  <article className={styles['train__option']}>
                  <div className={styles['train__option-side']}>
                        <div className={styles['train__logo-container']}>
                           <img src='icons/train_train-select.svg' alt='train' className={styles['train__logo']}/>
                        </div>
                        <span className={styles['train__number']}>116C</span>
                        <div className={styles['train__route']}>Адлер <img src='icons/arrow_train-select.svg' className={styles['arrow']}/> Москва Санкт-Петербург</div>
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
                        <button type='button' className={styles['seats__select']} onClick={() => navigate(SEAT_SELECT_ROUTE)}>Выбрать места</button>
                     </div>
                  </article>
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