import styles from './FinalPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { Main } from '../Main/Main';
import { useRef } from 'react';

export const FinalPage = () => {

   const navigate = useNavigate();

    return (
       <main className={styles['main-container']}>
          <div className={styles['final-page']}>
            <div className={styles['final-page_header']}>
               <div className={styles['order-number']}> 
                  №Заказа 285АА
               </div>
               <div className={styles['order-cost']}> 
                  <span className={styles['order-cost__text']}>сумма</span>
                  <span className={styles['order-cost__amount']}>7 760</span>
                  <img src='icons/currency__icon_total.svg' className={styles['order-cost__currency']}/>
               </div>
            </div>
            <div className={styles['hints']}>
               <div className={styles['hint']}>
                  <img src='icons\final-page_hint-email.svg' className={styles['hint_img']}/>
                  <div className={styles['hint_text']}>
                     билеты будут отправлены <br/> на ваш e-mail
                  </div>
               </div>
               <div className={styles['hint']}>
                  <img src='icons\final-page_hint-print.svg' className={styles['hint_img']}/>
                  <div className={styles['hint_text']}>
                     распечатайте и сохраняйте билеты <br/> до даты поездки
                  </div>
               </div>
               <div className={styles['hint']}>
                  <img src='icons\final-page_hint-docs.svg' className={styles['hint_img']}/>
                  <div className={styles['hint_text']}>
                     предьявите распечатанные билеты при посадке
                  </div>
               </div>
            </div>
            <div className={styles['text']}>
               <span className={styles['appeal']}>Ирина Эдуардовна!</span>
               <span className={styles['text_body']}>
                  Ваш заказ успешно оформлен. <br/> 
                  В ближайшее время с вами свяжется наш оператор для подтверждения.
               </span>
               <span className={styles['thanks']}>
                  Благодарим Вас за оказанное доверие и желаем приятного путешествия!
               </span>
            </div>
            <div className={styles['bottom']}>
               <div className={styles['rate']}>
                  <div className={styles['rate_text']}>Оценить сервис</div>
                  <div className={styles['stars']}>
                     <div className={styles['star']}>
                     <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.2637 16.8926L27.4883 17.584H42.5732L30.957 26.0234L30.3691 26.4512L30.5938 27.1416L35.0312 40.7988L23.4141 32.3584L22.8262 31.9307L22.2383 32.3584L10.6201 40.7988L15.0586 27.1416L15.2832 26.4512L14.6953 26.0234L3.0791 17.584H18.1641L18.3887 16.8926L22.8262 3.23535L27.2637 16.8926Z" stroke="white" strokeWidth="2"/>
</svg>
                     </div>
                     <div className={styles['star']}>
                     <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.2637 16.8926L27.4883 17.584H42.5732L30.957 26.0234L30.3691 26.4512L30.5938 27.1416L35.0312 40.7988L23.4141 32.3584L22.8262 31.9307L22.2383 32.3584L10.6201 40.7988L15.0586 27.1416L15.2832 26.4512L14.6953 26.0234L3.0791 17.584H18.1641L18.3887 16.8926L22.8262 3.23535L27.2637 16.8926Z" stroke="white" strokeWidth="2"/>
</svg>
                     </div>
                     <div className={styles['star']}>
                     <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.2637 16.8926L27.4883 17.584H42.5732L30.957 26.0234L30.3691 26.4512L30.5938 27.1416L35.0312 40.7988L23.4141 32.3584L22.8262 31.9307L22.2383 32.3584L10.6201 40.7988L15.0586 27.1416L15.2832 26.4512L14.6953 26.0234L3.0791 17.584H18.1641L18.3887 16.8926L22.8262 3.23535L27.2637 16.8926Z" stroke="white" strokeWidth="2"/>
</svg>                     </div>
                     <div className={styles['star']}>
                     <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.2637 16.8926L27.4883 17.584H42.5732L30.957 26.0234L30.3691 26.4512L30.5938 27.1416L35.0312 40.7988L23.4141 32.3584L22.8262 31.9307L22.2383 32.3584L10.6201 40.7988L15.0586 27.1416L15.2832 26.4512L14.6953 26.0234L3.0791 17.584H18.1641L18.3887 16.8926L22.8262 3.23535L27.2637 16.8926Z" stroke="white" strokeWidth="2"/>
</svg>                     </div>
                     <div className={styles['star']}>
                     <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.2637 16.8926L27.4883 17.584H42.5732L30.957 26.0234L30.3691 26.4512L30.5938 27.1416L35.0312 40.7988L23.4141 32.3584L22.8262 31.9307L22.2383 32.3584L10.6201 40.7988L15.0586 27.1416L15.2832 26.4512L14.6953 26.0234L3.0791 17.584H18.1641L18.3887 16.8926L22.8262 3.23535L27.2637 16.8926Z" stroke="white" strokeWidth="2"/>
</svg>                     </div>
                  </div>
               </div>
               <button type='button' className={styles['back-btn']} onClick={() => navigate('/')}>Вернуться на главную</button>
            </div>
          </div>
       </main>
    );
 };