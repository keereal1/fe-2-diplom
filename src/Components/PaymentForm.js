import { useState } from "react";
import { PassengerForm } from "../Pages/Selection/PassengerForm/PassengerForm";
import styles from '../Pages/Payment/Payment.module.css';

export function PaymentForm () {
   return (
      <>
      <form className={styles['passenger__form']}>
         
         <div className={styles['passenger__bio']}>
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
         </div>
         <div className={styles['contact-info']}>
            <div className={styles['input__container']}>
               <label htmlFor='phone'>Контактный телефон</label>
               <input type='tel' id='phone' name='phone' className={styles['phone__input']} placeholder='+7 ___ ___ __ __'/>
            </div>
            <div className={styles['input__container']}>
               <label htmlFor='email'>E-mail</label>
               <input type='email' id='email' name='email' className={styles['email__input']} placeholder='inbox@gmail.ru'/>
            </div>
         </div>
         <div className={styles['payment__header']}>
            <span className={styles['payment__header-title']}>Способ оплаты</span>                      
         </div>
         <div className={styles['online-payment']}>
            <input type='checkbox' id='payment-type' name='online-payment'className={styles['payment-checkbox']}/>
            <label htmlFor='payment-type' className={styles['payment-checkbox__label']}>Онлайн</label>
         </div>
            <ul className={styles['payment__list']}>
               <li className={styles['payment__item']}>
                  <a className={styles['payment__link']}>
                     Банковской картой
                  </a>
               </li>
               <li className={styles['payment__item']}>
                  <a className={styles['payment__link']}>
                     PayPal
                  </a>
               </li>
               <li className={styles['payment__item']}>
                  <a className={styles['payment__link']}>
                     Visa QIWI Wallet
                  </a>
               </li>
            </ul>
         <div className={styles['cash-payment']}>
            <input type='checkbox' id='payment-type' name='cash-payment' className={styles['payment-checkbox']}/>
            <label htmlFor='payment-type' className={styles['payment-checkbox__label']}>Наличными</label>
         </div>
      </form>
      </>
   )    
}