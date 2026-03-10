import { useState } from "react"
import styles from '../Pages/Selection/SelectTrain/TrainSelection.module.css'
import { useNavigate } from "react-router-dom"
import { SEAT_SELECT_ROUTE } from "../App/routes/routes";


export function TrainPrewiev () {

    const navigate = useNavigate();

    return (
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
    )
}