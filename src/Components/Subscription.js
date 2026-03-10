import { useState } from "react";

export function Subscription () {

const [email, setEmail] = useState('');


const handleInput = (e) => {
    const value = e.target.value;
    setEmail(value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка email:', email);
    setEmail('')
}

    return (
        <>
                <form className='footer__subscribe-panel-form' onSubmit={handleSubmit}>
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
                            value={email} onChange={handleInput}
                        />
                        <button className='footer__subscribe-panel-button'>отправить</button>
                    </div>
                </form>
        </>

    )
}