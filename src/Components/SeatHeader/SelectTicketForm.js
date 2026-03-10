import { useState } from "react";
import styles from './SeatHeader.module.css'
import { TRAIN_SELECT_ROUTE } from '../../App/routes/routes'
import { useNavigate } from "react-router-dom";


export function SelectTicketForm () {

    const navigate = useNavigate()

    return (
        <form className={styles['search-form']}>
        <div className={styles['search-form_info']}>
            <div className={styles['search-form__direction']}>
                <label htmlFor='direction' className={styles['search-form__direction-title']}>Направление</label>
                <div className={styles['search-form__direction-container']}>
                    <img src='icons\header_location_icon.svg' className={styles['header_location_icon']}/>
                    <input type="text" id="direction-from" placeholder="Откуда" className={styles['search-form__direction-input']}/>
                    <img src='icons\header_rotate_icon.svg' className={styles['rotate_icon']}/>
                    <img src='icons\header_location_icon.svg' className={styles['header_location_icon-second']}/>
                    <input type="text" id="direction-to" placeholder="Куда" className={styles['search-form__direction-input']}/>
                </div> 
            </div>
            <div className={styles['search-form__date']}>
                <label htmlFor='date' className={styles['search-form__date-title']}>Дата</label>
                <div className={styles['search-date-container']}>
                    <input type="date" id="date" placeholder="ДД/ММ/ГГГГ"  className={styles['search-form__date-input']}/>
                    <input type="date" id="date" placeholder="ДД/ММ/ГГГГ" className={styles['search-form__date-input']}/>
                </div> 
            </div>
        </div>
        <button type="submit" className={styles['search-form__button']} onClick={() => navigate(TRAIN_SELECT_ROUTE)}>Найти билеты</button>
    </form>
    )
}