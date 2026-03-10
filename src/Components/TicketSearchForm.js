import { useState } from "react";
import { TRAIN_SELECT_ROUTE } from '../App/routes/routes'
import { useNavigate } from "react-router-dom";

export function TicketSearchForm () {

    const navigate = useNavigate()

    return (
    <form className="search-form">
        <div className="search-form__direction">
           <label htmlFor='direction' className="search-form__direction-title">Направление</label>
           <div className='search-form__direction-container'>
                <img src='icons\header_location_icon.svg' className='header_location_icon'/>
                <input type="text" id="direction-from" placeholder="Откуда" className='search-form__direction-input'/>
                <img src='icons\header_rotate_icon.svg' className='rotate_icon'/>
                <img src='icons\header_location_icon.svg' className='header_location_icon second'/>
                <input type="text" id="direction-to" placeholder="Куда" className='search-form__direction-input'/>
            </div> 
        </div>
        <div className="search-form__date">
            <label htmlFor='date' className="search-form__date-title">Дата</label>
            <div className='search-date-container'>
                <input type="date" id="date" placeholder="ДД/ММ/ГГГГ"  className='search-form__date-input'/>
                <input type="date" id="date" placeholder="ДД/ММ/ГГГГ" className='search-form__date-input'/>
            </div> 
        </div>
        <button type="submit" className='search-form__button' onClick={() => navigate(TRAIN_SELECT_ROUTE)}>Найти билеты</button>
    </form>
    )
}