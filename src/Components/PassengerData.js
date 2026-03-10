import { useState } from "react";
import styles from '../Pages/Selection/PassengerForm/PassengerForm.module.css'

export function PassengerData () {
    return (
      <>
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
                    <select id='doc__type' name='doc__type' className={styles['docs__input']}>
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
      </>
        
    )
}