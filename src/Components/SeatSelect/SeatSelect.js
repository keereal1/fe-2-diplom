import { useState } from "react";
import styles from '../../Pages/Selection/SelectSeat/SeatSelection.module.css'
import { useNavigate } from "react-router-dom";
import { TRAIN_SELECT_ROUTE } from "../../App/routes/routes";
import { RenderTicketsSection } from './TicketSection'


export function SeatSelect () {

    const navigate = useNavigate()


    const renderFacilities = () => (
        <div className={styles['facilities']}>
           <img 
              src='icons/wagon__ac.svg' 
              className='ac__icon' 
              title='Кондиционер'
              alt='Кондиционер'
           />
           <img
               src='icons/wagon__wifi.svg' 
               className='wifi__icon' 
               title='Wi-Fi'
               alt='WiFi'
            />
           <img
               src='icons/wagon__bed.svg' 
               className='bed__icon' 
               title='Постельное белье'
               alt='Постельное белье'
            />
           <img 
               src='icons/wagon__coffee.svg'
               className='coffee__icon'
               title='Питание'
               alt='Питание'
            />
        </div>
    );

    return (
    <>
        <article className={styles['seats__option']}>   
        <div className={styles['seats__option-header']}>
           <img src='icons/seats-arrow.svg'  className={styles['seats__option-arrow']} alt='arrow'/>
           <button className={styles['back-to-trains__btn']} onClick={() => navigate(TRAIN_SELECT_ROUTE)}>Выбрать другой поезд</button>
        </div>
        <div className={styles['train__info']}>
        <img src='icons/train-info-logo.svg' alt='train' className={styles['train__logo']}/>
           <div className={styles['train__info-train']}>
              <span className={styles['train__number']}>116C</span>
              <div className={styles['train__route']}> 
                 <span className={styles['start']}>Адлер</span>
                 <img src='icons/arrow_train-select.svg' className={styles['arrow']} alt='arrow'/> <br/>
                 Москва <img src='icons/arrow_train-select.svg' className={styles['arrow']} alt='arrow'/> <br/>
                 Санкт-Петербург
              </div>
           </div>
              <div className={styles['train__info-stations']}>
                 <div className={styles['train__from']}>
                    <div className={styles['departure-time']}>00:10</div>
                    <div className={styles['departure-city']}>Москва</div>
                    <div className={styles['departure-station']}>Курский вокзал</div>
                 </div>
                 <img src='icons/arrow__train-dir.svg' className={styles['travel-time__arrow']} alt='arrow'/>
                 <div className={styles['train__to']}>
                    <div className={styles['departure-time']}>09:52</div>
                    <div className={styles['departure-city']}>Санкт-Петербург</div>
                    <div className={styles['departure-station']}>Ладожский вокзал</div>
                 </div>
           </div>
           <div className={styles['travel-time']}>
              <img src='icons/clock-logo.svg' className={styles['clock__logo']} alt='clock'/>
              <div className={styles['time']}>9 часов <br/> 42 минуты</div>
           </div>
        </div>
        {RenderTicketsSection()}
        <div className={styles['wagon']}>
           <div className={styles['wagon__title']}>
              Тип вагона
           </div>
           <div className={styles['wagon__types']}>
              <div className={styles['type']}>
                 <img src='icons/wagon__type-sit.svg' className={styles['type__logo-sit']} alt='Сидячий'/>
                 <span className={styles['type__name']}>Сидячий</span>
              </div>
              <div className={styles['type']}>
                 <img src='icons/wagon__type-plats.svg' className={styles['type__logo-plats']} alt='Плацкарт'/>
                 <span className={styles['type__name']}>Плацкарт</span>
              </div>
              <div className={styles['type']}>
                 <img src='icons/wagon__type-coupe.svg' className={styles['type__logo-coupe']} alt='Купе'/>
                 <span className={styles['type__name']}>Купе</span>
              </div>
              <div className={styles['type']}>
                 <img src='icons/wagon__type-lux.svg' className={styles['type__logo-lux']} alt='Люкс'/>
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
                       2 920 <img src='icons/currency__trains.svg' className={styles['currency-icon']} alt='currency'/>
                    </span>
                    <span className={styles['bottom-price']}>
                       3 530 <img src='icons/currency__trains.svg' className={styles['currency-icon']} alt='currency'/>
                    </span>
                 </div>
                 <div className={styles['additional-info']}>
                    <span className={styles['service']}>
                       Обслуживание ФПК
                    </span>
                    {renderFacilities()}
                 </div>
              </div>
           </div>
           <div className={styles['another-orders']}>
              11 человек выбирают места в этом поезде
           </div>
           <img src='icons/wagon-icon.svg' className={styles['wagon-img']} alt='wagon'/>
        </div>
     </article>
    <article className={styles['seats__option-back']}>   
                       <div className={styles['seats__option-header-back']}>
                          <img src='icons/seats-arrow-back.svg'  className={styles['seats__option-arrow']} alt='arrow'/>
                          <button className={styles['back-to-trains__btn']} onClick={() => navigate(TRAIN_SELECT_ROUTE)}>Выбрать другой поезд</button>
                       </div>
                       <div className={styles['train__info']}>
                       <img src='icons/train-info-logo.svg' alt='train' className={styles['train__logo']}/>
                          <div className={styles['train__info-train']}>
                             <span className={styles['train__number']}>116C</span>
                             <div className={styles['train__route']}> 
                                <span className={styles['start']}>Адлер</span>
                                <img src='icons/arrow_train-select.svg' className={styles['arrow']} alt='arrow'/> <br/>
                                Москва <img src='icons/arrow_train-select.svg' className={styles['arrow']} alt='arrow'/> <br/>
                                Санкт-Петербург
                             </div>
                          </div>
                             <div className={styles['train__info-stations']}>
                                <div className={styles['train__from']}>
                                   <div className={styles['departure-time']}>00:10</div>
                                   <div className={styles['departure-city']}>Москва</div>
                                   <div className={styles['departure-station']}>Курский вокзал</div>
                                </div>
                                <img src='icons/arrow__train-dir.svg' className={styles['travel-time__arrow-reverse']} alt='arrow'/>
                                <div className={styles['train__to']}>
                                   <div className={styles['departure-time']}>09:52</div>
                                   <div className={styles['departure-city']}>Санкт-Петербург</div>
                                   <div className={styles['departure-station']}>Ладожский вокзал</div>
                                </div>
                          </div>
                          <div className={styles['travel-time']}>
                             <img src='icons/clock-logo.svg' className={styles['clock__logo']} alt='clock'/>
                             <div className={styles['time']}>9 часов <br/> 42 минуты</div>
                          </div>
                       </div>
                       {RenderTicketsSection()}
                       <div className={styles['wagon']}>
                          <div className={styles['wagon__title']}>
                             Тип вагона
                          </div>
                          <div className={styles['wagon__types']}>
                             <div className={styles['type']}>
                                <img src='icons/wagon__type-sit.svg' className={styles['type__logo-sit']} alt='Сидячий'/>
                                <span className={styles['type__name']}>Сидячий</span>
                             </div>
                             <div className={styles['type']}>
                                <img src='icons/wagon__type-plats.svg' className={styles['type__logo-plats']} alt='Плацкарт'/>
                                <span className={styles['type__name']}>Плацкарт</span>
                             </div>
                             <div className={styles['type']}>
                                <img src='icons/wagon__type-coupe.svg' className={styles['type__logo-coupe']} alt='Купе'/>
                                <span className={styles['type__name']}>Купе</span>
                             </div>
                             <div className={styles['type']}>
                                <img src='icons/wagon__type-lux.svg' className={styles['type__logo-lux']} alt='Люкс'/>
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
                                      2 920 <img src='icons/currency__trains.svg' className={styles['currency-icon']} alt='currency'/>
                                   </span>
                                   <span className={styles['bottom-price']}>
                                      3 530 <img src='icons/currency__trains.svg' className={styles['currency-icon']} alt='currency'/>
                                   </span>
                                </div>
                                <div className={styles['additional-info']}>
                                   <span className={styles['service']}>
                                      Обслуживание ФПК
                                   </span>
                                   {renderFacilities()}
                                </div>
                             </div>
                          </div>
                          <div className={styles['another-orders']}>
                             11 человек выбирают места в этом поезде
                          </div>
                          <img src='icons/wagon-icon.svg' className={styles['wagon-img']} alt='wagon'/>
                       </div>
    </article>
    </>

    )
}