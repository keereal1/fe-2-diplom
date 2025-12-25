export const Footer = () => {

    const moveToTop = () => {window.scrollTo({top:0, behavior:"smooth"})}

    return (
        <footer className="footer">
             <section className='footer__top'>
            <aside className='footer__left-panel'>
               <h3 className='footer__left-panel-title'>Свяжитесь с нами</h3>
               <div className='footer__left-panel-phone'>
                  <img
                     src='icons/phone-icon.svg'
                     alt='phone icon'
                     className='footer__phone-img'
                  />
                  <a href='tel:+78000000000' className='footer__left-panel-text'>
                     8(800) 000 00 00
                  </a>
               </div>
               <div className='footer__left-panel-email'>
                  <img
                     src='icons/mail-icon.svg'
                     alt='email icon'
                     className='footer__email-img'
                  />
                  <a href='mailto:inbox@mail.ru' className='footer__left-panel-text'>
                     inbox@mail.ru
                  </a>
               </div>
               <div className='footer__left-panel-skype'>
                  <img
                     src='icons/skype-icon.svg'
                     alt='skype icon'
                     className='footer__skype-img'
                  />
                  <span className='footer__left-panel-text'>tu.train.tickets</span>
               </div>
               <div className='footer__left-panel-address'>
                  <img
                     src='icons/location-icon.svg'
                     alt='address icon'
                     className='footer__address-img'
                  />
                  <span className='footer__left-panel-text'>г. Москва ул. Московская 27-35555 555</span>
               </div>
            </aside>
            <article className='footer__subscribe-panel'>
               <div className='footer__subscribe-panel-email'>
                  <h3 className='footer__subscribe-panel-title'>Подписка</h3>
                  <form className='footer__subscribe-panel-form'>
                     <label
                        htmlFor='subscribe-panel__input'
                        className='footer__subscribe-panel-input-label'
                     >
                        Будьте в курсе событий
                     </label>
                     <div className='footer__subscribe-panel-input-container'>
                        <input
                           id='subscribe-panel__input'
                           type='email'
                           name='subscribe-panel__input'
                           placeholder='e-mail'
                           className='footer__subscribe-panel-input'
                        />
                        <button className='footer__subscribe-panel-button'>отправить</button>
                     </div>
                  </form>
               </div>
               <div className='footer__subscribe-panel-social'>
                  <h3 className='footer__subscribe-panel-title'>Подписывайтесь на нас</h3>
                  <div className='footer__subscribe-panel-socials'>
                     <a href='foo' className='footer__subscribe-panel-icon'>
                        <img src='icons/youtube-icon.svg' alt='youtube-icon' />
                     </a>
                     <a href='foo' className='footer__subscribe-panel-icon'>
                        <img src='icons/linkedin-icon.svg' alt='linkedin-icon' />
                     </a>
                     <a href='foo' className='footer__subscribe-panel-icon'>
                        <img src='icons/google-icon.svg' alt='google-icon' />
                     </a>
                     <a href='foo' className='footer__subscribe-panel-icon'>
                        <img src='icons/fb-icon.svg' alt='facebook-icon' />
                     </a>
                     <a href='foo' className='footer__subscribe-panel-icon'>
                        <img src='icons/twitter-icon.svg' alt='twitter-icon' />
                     </a>
                  </div>
               </div>
            </article>
         </section>
         <section className='footer__bottom'>
            <h1 className='footer__logo'>Logo</h1>
            <button onClick={moveToTop} className='footer__btn-circle'>
                <img
                src='icons/to-top-circle.svg'
                alt='to-top-button'
                className='footer__btn-circle'
                />
            </button>
            <span className='footer__text'>2025 WEB</span>
         </section>
        </footer>
    )
    
}