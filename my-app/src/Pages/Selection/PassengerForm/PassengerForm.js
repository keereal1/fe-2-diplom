import styles from './PassengerForm.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { PAYMENT_FORM_ROUTE } from '../../../../src/App/routes/routes';

export const PassengerForm = () => {

   const navigate = useNavigate();

   const onSelect = (e) => {
      console.log(e.target.value)
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
             </li>f
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
                        <img src='icons/passenger__minus.svg' className={styles['minus__icon']}/>
                        <span className={styles['passenger__header-title']}>Пассажир 1</span>
                        <img src='icons/passenger__close.svg' className={styles['close__icon']}/>                           
                     </div>   
                     <form className={styles['passenger__form']}>
                        <div className={styles['passenger__bio']}>
                           <div className={styles['select__container']}>
                              <label htmlFor='age' className={styles['input__label']}/>
                              <select id='age' className={styles['select']}>
                                 <option className={styles['adult']} value='adult'>Взрослый</option>
                                 <option className={styles['child']} value='child'>Ребенок</option>
                              </select>
                           </div>
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
                           <div className={styles['sex__birth-date']}>
                              <div className={styles['sex__container']}>
                                 <span className={styles['sex__title']}>Пол</span>
                                 <div className={styles['sex__choises']}>
                                    <button type='button' className={styles['sex__btn' , 'sex__btn-active']} name='male'>М</button>
                                    <button type='button' className={styles['sex__btn']} name='female'>Ж</button>
                                 </div>
                              </div>
                              <div className={styles['birth-date']}>
                                 <div className={styles['input__container']}>
                                    <label htmlFor='date-birth' className={styles['input__label']}>Дата рождения</label>
                                    <input type='date' id='date-birth' name='date-birth' className={styles['date__input']}/>
                                 </div>
                              </div>
                           </div>
                           <div className={styles['mobility__container']}>
                              <input type='checkbox' className={styles['mobility']} id='mobility'/>
                              <label htmlFor='mobility' className={styles['mobility__label']}>Ограниченная мобильность</label>
                           </div>
                        </div>
                        <div className={styles['passenger__docs']}>
                           <div className={styles['docs']}>
                                 <div className={styles['input__container']}>
                                    <label htmlFor='doc__type' className={styles['input__label']}>Тип документа</label>
                                    <select id='doc__type' name='doc__type' className={styles['docs__input']} onChange={onSelect}>
                                       <option className={styles['passport']}>Паспорт РФ</option>
                                       <option className={styles['birth-cert']}>Свидетельство о рождении</option>
                                    </select>
                                 </div>
                                 <div className={styles['input__container']}>
                                    <label htmlFor='series' className={styles['input__label']}>Серия</label>
                                    <input type='text' id='series' name='series' className={styles['docs__input']} placeholder='_ _ _ _'/>
                                 </div>
                                 <div className={styles['input__container']}>
                                    <label htmlFor='number' className={styles['input__label']}>Номер</label>
                                    <input type='text' id='number' name='' className={styles['docs__input']} placeholder='_ _ _ _ _ _'/>
                                 </div>
                              </div>
                        </div>
                        <button type='button' className={styles['next-passanger__btn']}>Следующий пассажир</button>
                     </form>
                  </article>
                  <article className={styles['passenger']}>
                     <div className={styles['passenger__header']}>
                        <img src='icons/passenger__minus.svg' className={styles['minus__icon']}/>
                        <span className={styles['passenger__header-title']}>Пассажир 2</span>
                        <img src='icons/passenger__close.svg' className={styles['close__icon']}/>                           
                     </div>   
                     <form className={styles['passenger__form']}>
                        <div className={styles['passenger__bio']}>
                           <div className={styles['select__container']}>
                              <label htmlFor='age' className={styles['input__label']}/>
                              <select id='age' className={styles['select']}>
                                 <option className={styles['adult']} value='adult'>Взрослый</option>
                                 <option className={styles['child']} value='child'>Ребенок</option>
                              </select>
                           </div>
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
                           <div className={styles['sex__birth-date']}>
                              <div className={styles['sex__container']}>
                                 <span className={styles['sex__title']}>Пол</span>
                                 <div className={styles['sex__choises']}>
                                    <button type='button' className={styles['sex__btn' , 'sex__btn-active']} name='male'>М</button>
                                    <button type='button' className={styles['sex__btn']} name='female'>Ж</button>
                                 </div>
                              </div>
                              <div className={styles['birth-date']}>
                                 <div className={styles['input__container']}>
                                    <label htmlFor='date-birth' className={styles['input__label']}>Дата рождения</label>
                                    <input type='date' id='date-birth' name='date-birth' className={styles['date__input']}/>
                                 </div>
                              </div>
                           </div>
                           <div className={styles['mobility__container']}>
                              <input type='checkbox' className={styles['mobility']} id='mobility'/>
                              <label htmlFor='mobility' className={styles['mobility__label']}>Ограниченная мобильность</label>
                           </div>
                        </div>
                        <div className={styles['passenger__docs']}>
                           <div className={styles['docs']}>
                                 <div className={styles['input__container']}>
                                    <label htmlFor='doc__type' className={styles['input__label']}>Тип документа</label>
                                    <select id='doc__type' name='doc__type' className={styles['docs__input']} onChange={onSelect}>
                                       <option value='Паспорт РФ' className={styles['passport']}>Паспорт РФ</option>
                                       <option value='Свидетельство о рождении' className={styles['birth-cert']}>Свидетельство о рождении</option>
                                    </select>
                                 </div>
                                 <div className={styles['input__container']}>
                                    <label htmlFor='birth-cert__number' className={styles['input__label']}>Номер</label>
                                    <textarea 
                                       placeholder='12 символов
                                       _ _ _ _ _ _ _ _ _ _ _'
                                       id='birth-cert__number' name='birth-cert__number' className={styles['docs__input']}>
                                    </textarea>
                                 </div>
                              </div>
                        </div>
                        {/* <div className={styles['error']}>
                           <img src='icons/error_close.svg' className={styles['error_close']}/>
                           <p>
                              Номер свидетельства о рожденни указан некорректно <br/>
                              Пример: <span className={styles['number__example']}>VIII-ЫП-123456</span> 
                           </p>
                        </div> */}
                        <div className={styles['next-passanger__container']}>
                           <div className={styles['success__container']}>
                              <img src='icons/form_success.svg' className={styles['success__icon']}/>
                              <div className={styles['success__text']}>Готово</div>
                           </div>
                            <button type='button' className={styles['next-passanger__btn']} >Следующий пассажир</button>
                        </div>
                     </form>
                  </article>
                  <article className={styles['passenger']}>
                     <div className={styles['passenger__header']}>
                        <img src='icons/passenger__plus.svg' className={styles['plus__icon']}/>
                        <span className={styles['passenger__header-title']}>Пассажир 3</span>                       
                     </div>   
                  </article>
                  <article className={styles['passenger__add']}>
                     <div className={styles['passenger__add_header']}>
                        <span className={styles['passenger__add_header-title']}>Добавить пассажира</span>     
                        <img src='icons/passenger__add.svg' className={styles['add__icon']}/>
                     </div>   
                  </article>
                  <section className={styles['next']}>
                     <button type='button' className={styles['next__btn']} onClick={() => navigate(PAYMENT_FORM_ROUTE)}>Далее</button>
                  </section>
            </main>
          </div>
       </section>
    );
 };