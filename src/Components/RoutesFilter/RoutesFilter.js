import { useState } from "react";
import styles from './RoutesFilter.module.css'
import { ThereBack } from "./ThereBack";

export function RoutesFilter () {
    const [toggles, setToggles] = useState({
        coupe: false,
        platskart: false,
        sitting: false,
        lux: false,
        wifi: false,
        express: false
    });

    const [priceRange, setPriceRange] = useState({
      min: 1920,
      max: 7000,
      currentMin: 1920,
      currentMax: 7000
    });

    const handleToggle = (name) => {
        setToggles(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

   const handleMinPriceChange = (e) => {
      const value = parseInt(e.target.value);
      if (value < priceRange.currentMax) {
          setPriceRange(prev => ({
              ...prev,
              currentMin: value
          }));
      }
  };

  const handleMaxPriceChange = (e) => {
      const value = parseInt(e.target.value);
      if (value > priceRange.currentMin) {
          setPriceRange(prev => ({
              ...prev,
              currentMax: value
          }));
      }
  };

   const getThumbPosition = (value) => {
        const percent = ((value - priceRange.min) / (priceRange.max - priceRange.min)) * 100;
        return percent;
    };

    
    return(
        <section className={styles['widget']}>
        <form className={styles['widget__form']}>
           <div className={styles['input__container']}>
              <label htmlFor='trip' className={styles['input__label']}>
                 Дата поездки
              </label>
              <input type='date' id='trip' className={styles['input__date']}/>
           </div>
           <div className={styles['input__container']}>
              <label htmlFor='arrival' className={styles['input__label']}>
                 Дата возвращения
              </label>
              <input type='date' id='arrival' className={styles['input__date']} />
           </div>
        </form>
        <form className={styles['widget__options']}>
           <div className={styles['widget__option']}>
              <img
                 src='icons/coupe-icon.svg'
                 alt='coupe icon'
                 className={styles['widget__option-icon']}
              />
              <span className={styles['widget__option-text']}>Купе</span>
              <div className={styles['toggle__container']}>
                 <input
                    type='checkbox'
                    id='toggle-coupe'
                    className={styles['toggle__input']}
                    checked={toggles.coupe}
                    onChange={() => handleToggle('coupe')}
                    hidden
                 />
                 <label 
                    htmlFor='toggle-coupe' 
                    className={styles['toggle__label']}
                    style={{
                        backgroundColor: toggles.coupe ? '#FCDC9D' : '#FFFFFF'
                    }}
                 >
                    <span 
                       className={styles['toggle__slider']}
                       style={{
                          transform: toggles.coupe ? 'translateX(44px)' : 'translateX(0)',
                          transition: 'transform 0.3s ease',
                          backgroundColor: toggles.coupe ? '#FFA800': '#C4C4C4'
                       }}
                    ></span>
                 </label>
              </div>
           </div>
           <div className={styles['widget__option']}>
              <img
                 src='icons/platskart-icon.svg'
                 alt='platskart icon'
                 className={styles['widget__option-icon']}
              />
              <span className={styles['widget__option-text']}>Плацкарт</span>
              <div className={styles['toggle__container']}>
                 <input
                    type='checkbox'
                    id='toggle-platskart'
                    className={styles['toggle__input']}
                    checked={toggles.platskart}
                    onChange={() => handleToggle('platskart')}
                    hidden
                 />
                 <label 
                    htmlFor='toggle-platskart' 
                    className={styles['toggle__label']}
                    style={{
                        backgroundColor: toggles.platskart ? '#FCDC9D' : '#FFFFFF'
                    }}
                 >
                    <span 
                       className={styles['toggle__slider']}
                       style={{
                          transform: toggles.platskart ? 'translateX(44px)' : 'translateX(0)',
                          transition: 'transform 0.3s ease',
                          backgroundColor: toggles.platskart ? '#FFA800': '#C4C4C4'
                       }}
                    ></span>
                 </label>
              </div>
           </div>
           <div className={styles['widget__option']}>
              <img
                 src='icons/siting-icon.svg'
                 alt='sitting icon'
                 className={styles['widget__option-icon']}
              />
              <span className={styles['widget__option-text']}>Сидячий</span>
              <div className={styles['toggle__container']}>
                 <input
                    type='checkbox'
                    id='toggle-sitting'
                    className={styles['toggle__input']}
                    checked={toggles.sitting}
                    onChange={() => handleToggle('sitting')}
                    hidden
                 />
                 <label 
                    htmlFor='toggle-sitting' 
                    className={styles['toggle__label']}
                    style={{
                        backgroundColor: toggles.sitting ? '#FCDC9D' : '#FFFFFF'
                    }}
                 >
                    <span 
                       className={styles['toggle__slider']}
                       style={{
                          transform: toggles.sitting ? 'translateX(44px)' : 'translateX(0)',
                          transition: 'transform 0.3s ease',
                          backgroundColor: toggles.sitting ? '#FFA800': '#C4C4C4'
                       }}
                    ></span>
                 </label>
              </div>
           </div>
           <div className={styles['widget__option']}>
              <img
                 src='icons/lux-icon.svg'
                 alt='lux icon'
                 className={styles['widget__option-icon']}
              />
              <span className={styles['widget__option-text']}>Люкс</span>
              <div className={styles['toggle__container']}>
                 <input
                    type='checkbox'
                    id='toggle-lux'
                    className={styles['toggle__input']}
                    checked={toggles.lux}
                    onChange={() => handleToggle('lux')}
                    hidden
                 />
                 <label 
                    htmlFor='toggle-lux' 
                    className={styles['toggle__label']}
                    style={{
                        backgroundColor: toggles.lux ? '#FCDC9D' : '#FFFFFF'
                    }}
                 >
                    <span 
                       className={styles['toggle__slider']}
                       style={{
                          transform: toggles.lux ? 'translateX(44px)' : 'translateX(0)',
                          transition: 'transform 0.3s ease',
                          backgroundColor: toggles.lux ? '#FFA800': '#C4C4C4'
                       }}
                    ></span>
                 </label>
              </div>
           </div>
           <div className={styles['widget__option']}>
              <img
                 src='icons/wifi-icon.svg'
                 alt='wifi icon'
                 className={styles['widget__option-icon']}
              />
              <span className={styles['widget__option-text']}>WI-FI</span>
              <div className={styles['toggle__container']}>
                 <input
                    type='checkbox'
                    id='toggle-wifi'
                    className={styles['toggle__input']}
                    checked={toggles.wifi}
                    onChange={() => handleToggle('wifi')}
                    hidden
                 />
                 <label 
                    htmlFor='toggle-wifi' 
                    className={styles['toggle__label']}
                    style={{
                        backgroundColor: toggles.wifi ? '#FCDC9D' : '#FFFFFF'
                    }}
                 >
                    <span 
                       className={styles['toggle__slider']}
                       style={{
                          transform: toggles.wifi ? 'translateX(44px)' : 'translateX(0)',
                          transition: 'transform 0.3s ease',
                          backgroundColor: toggles.wifi ? '#FFA800': '#C4C4C4'
                       }}
                    ></span>
                 </label>
              </div>
           </div>
           <div className={styles['widget__option']}>
              <img
                 src='/icons/rocket-icon.svg'
                 alt='express icon'
                 className={styles['widget__option-icon']}
              />
              <span className={styles['widget__option-text']}>Экспресс</span>
              <div className={styles['toggle__container']}>
                 <input
                    type='checkbox'
                    id='toggle-express'
                    className={styles['toggle__input']}
                    checked={toggles.express}
                    onChange={() => handleToggle('express')}
                    hidden
                 />
                 <label 
                    htmlFor='toggle-express' 
                    className={styles['toggle__label']}
                    style={{
                        backgroundColor: toggles.express ? '#FCDC9D' : '#FFFFFF'
                    }}
                 >
                    <span 
                       className={styles['toggle__slider']}
                       style={{
                          transform: toggles.express ? 'translateX(44px)' : 'translateX(0)',
                          transition: 'transform 0.3s ease',
                          backgroundColor: toggles.express ? '#FFA800': '#C4C4C4'
                       }}
                    ></span>
                 </label>
              </div>
           </div>
        </form>

        <form className={styles['widget__price']}>
                <div className={styles['widget__price-content']}>
                    <span className={styles['widget__price-title']}>Стоимость</span>
                    <div className={styles['from-to']}>
                        <span>от</span>
                        <span>до</span>
                    </div>
                    <div className={styles['price-range-container']}>
                        <div className={styles['price-range-track']}>
                            <div 
                                className={styles['price-range-fill']}
                                style={{
                                    left: `${getThumbPosition(priceRange.currentMin)}%`,
                                    width: `${getThumbPosition(priceRange.currentMax) - getThumbPosition(priceRange.currentMin)}%`
                                }}
                            />
                        </div>
                        
                        <div className={styles['price-range-inputs']}>
                            <input
                                type='range'
                                name='range-min'
                                min={priceRange.min}
                                max={priceRange.max}
                                value={priceRange.currentMin}
                                onChange={handleMinPriceChange}
                                className={styles['price-range-input']}
                            />
                            <input
                                type='range'
                                name='range-max'
                                min={priceRange.min}
                                max={priceRange.max}
                                value={priceRange.currentMax}
                                onChange={handleMaxPriceChange}
                                className={styles['price-range-input']}
                            />
                        </div>
                        
                        <div className={styles['price-range-labels']}>
                            <span 
                                className={styles['price-label-min']}
                                style={{
                                    left: `${getThumbPosition(priceRange.currentMin)}%`
                                }}
                            >
                                {priceRange.currentMin}
                            </span>
                            <span 
                                className={styles['price-label-max']}
                                style={{
                                    left: `${getThumbPosition(priceRange.currentMax)}%`
                                }}
                            >
                                {priceRange.currentMax}
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        <ThereBack/>
     </section>
    )
}