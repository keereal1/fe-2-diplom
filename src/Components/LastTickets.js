import { useState } from "react";
import styles from '../Pages/Selection/SelectTrain/TrainSelection.module.css'

export function LastTickets () {
    return (
        <div className={styles['ticket__cards']}>
        <div className={styles['ticket__card']}>
           <div className={styles['ticket__card_top']}>
              <div className={styles['ticket__card_from']}>
                 <div className={styles['departure-city']}>Москва</div>
                 <div className={styles['departure-station']}>Курский вокзал</div>
              </div>
              <div className={styles['ticket__card_to']}>
                 <div className={styles['departure-city']}>Самара</div>
                 <div className={styles['departure-station']}>Московский вокзал</div>
              </div>
           </div>
           <div className={styles['ticket__card_bottom']}>
              <img src='icons/train_carriage-icons.svg' className={styles['carriage-icons']}/>
              <div className={styles['last-tickets_price']}>
                 <span className={styles['last-tickets_price_text']}>от</span>
                 <span className={styles['last-tickets_price_value']}>2 500</span>
                 <img src='icons/currency__trains.svg' className={styles['last-tickets_price_currency']}/>
              </div>   
           </div>
        </div>
        <div className={styles['ticket__card']}>
           <div className={styles['ticket__card_top']}>
              <div className={styles['ticket__card_from']}>
                 <div className={styles['departure-city']}>Москва</div>
                 <div className={styles['departure-station']}>Курский вокзал</div>
              </div>
              <div className={styles['ticket__card_to']}>
                 <div className={styles['departure-city']}>Самара</div>
                 <div className={styles['departure-station']}>Московский вокзал</div>
              </div>
           </div>
           <div className={styles['ticket__card_bottom']}>
              <img src='icons/train_carriage-icons.svg' className={styles['carriage-icons']}/>
              <div className={styles['last-tickets_price']}>
                 <span className={styles['last-tickets_price_text']}>от</span>
                 <span className={styles['last-tickets_price_value']}>2 500</span>
                 <img src='icons/currency__trains.svg' className={styles['last-tickets_price_currency']}/>
              </div>   
           </div>
        </div>
        <div className={styles['ticket__card']}>
           <div className={styles['ticket__card_top']}>
              <div className={styles['ticket__card_from']}>
                 <div className={styles['departure-city']}>Москва</div>
                 <div className={styles['departure-station']}>Курский вокзал</div>
              </div>
              <div className={styles['ticket__card_to']}>
                 <div className={styles['departure-city']}>Самара</div>
                 <div className={styles['departure-station']}>Московский вокзал</div>
              </div>
           </div>
           <div className={styles['ticket__card_bottom']}>
              <img src='icons/train_carriage-icons.svg' className={styles['carriage-icons']}/>
              <div className={styles['last-tickets_price']}>
                 <span className={styles['last-tickets_price_text']}>от</span>
                 <span className={styles['last-tickets_price_value']}>2 500</span>
                 <img src='icons/currency__trains.svg' className={styles['last-tickets_price_currency']}/>
              </div>   
           </div>
        </div>
     </div>
    )
}