
export const Reviews = () => {
    return (
        <section className='reviews'>
            <div className='reviews__header'>Отзывы</div>
            <div className='reviews__content'>
                <div className='review'>
                    <img src='images/author_1.png' alt='Author' className='review__image'/>
                    <div className='review__content'>
                        <h3 className='review__title'>Екатерина Вальнова</h3>
                        <p className='review__text'>
                            Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.
                        </p>
                    </div>
                </div>
                <div className='review'>
                    <img src='images/author_2.png' alt='Author' className='review__image'/>
                    <div className='review__content'>
                        <h3 className='review__title'>Евгений Стрыкало</h3>
                        <p className='review__text'>
                        СМС-сопровождение до посадки 
                        Сразу после оплаты ж/д билетов 
                        и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
                        </p>
                    </div>
                </div>
            </div>
            <img src='icons/circles_reviews.svg' alt='circles' className='reviews__circles'/>
        </section>
    )
}