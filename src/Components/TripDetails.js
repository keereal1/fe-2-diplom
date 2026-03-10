import { use, useState } from "react";
import styles from '../Pages/Selection/PassengerForm/PassengerForm.module.css' 

export function TripDetails () {

    const [isThereExpanded, setIsThereExpanded] = useState(true);
    const [isBackExpanded, setIsBackExpanded] = useState(true);
    const [isPassengerExpanded, setisPassengerExpanded] = useState(true)

    
    const toggleThereExpand = () => {
        setIsThereExpanded(!isThereExpanded);
     };

     const toggleBackExpand = () => {
        setIsBackExpanded(!isBackExpanded);
     };

     const togglePassengerExpand = () => {
        setisPassengerExpanded(!isPassengerExpanded)
     }

     return (
        <>
                <div className={styles['widget__there']}>
                  <div className={styles['widget__there-header']}>
                     <img src='icons/widget_there_arrow.svg' className={styles['widget__there-arrow']}></img>
                     <span className={styles['widget__there-title']}>Туда</span>
                     <span className={styles['widget__there-date']}>30.08.2018</span>
                     <img 
                        src={isThereExpanded ? 'icons/widget__shrink.svg' : 'icons/widget__expand.svg'}
                        className={styles['widget__shrink']}
                        onClick={toggleThereExpand}
                     />
                  </div>
                  {isThereExpanded && (
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
                  )}
               </div>
               <div className={styles['widget__there']}>
                  <div className={styles['widget__there-header']}>
                  <img src='icons/widget_back_arrow.svg' className={styles['widget__back-arrow']}/>
                     <span className={styles['widget__there-title']}>Обратно</span>
                     <span className={styles['widget__there-date']}>30.08.2018</span>
                     <img 
                        src={isThereExpanded ? 'icons/widget__shrink.svg' : 'icons/widget__expand.svg'}
                        className={styles['widget__shrink']}
                        onClick={toggleBackExpand}
                     />
                </div>
                {isBackExpanded && (
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
                )}
               </div>
               <div className={styles['widget__passengers']}>
                  <div className={styles['widget__passengers-header']}>
                  <img src='icons/widget_passengers.svg' className={styles['widget__passenger-icon']}/>
                     <span className={styles['widget__there-title']}>Пассажиры</span>
                     <img 
                        src={isThereExpanded ? 'icons/widget__shrink.svg' : 'icons/widget__expand.svg'}
                        className={styles['widget__shrink']}
                        onClick={togglePassengerExpand}
                     />
                </div>
                {isPassengerExpanded && (
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
                )}                  
               </div>
               <div className={styles['widget__total']}>
                     <span className={styles['widget__total-text']}>Итог</span>
                     <span className={styles['widget__total-value']}>
                        7 760
                        <img src='icons/currency__icon_total.svg' className={styles['currency-icon_total']}/>
                      </span>
                  </div>
        </>
     )
}