import styles from './RoutesFilter.module.css'
import { useState } from 'react';

export function ThereBack () {

    const [isThereExpanded, setIsThereExpanded] = useState(false);
    const [isBackExpanded, setIsBackExpanded] = useState(false);
    const [timeRange, setTimeRange] = useState({
      min: 0,
      max: 24,
      currentMin: 0,
      currentMax: 24
    })

    const toggleThereExpand = () => {
        setIsThereExpanded(!isThereExpanded);
     };

     const toggleBackExpand = () => {
        setIsBackExpanded(!isBackExpanded);
     };

     const handleMinTimeChange = (e) => {
      const value = parseInt(e.target.value);
      if (value < timeRange.currentMax) {
          setTimeRange(prev => ({
              ...prev,
              currentMin: value
          }));
      }
  };

  const handleMaxTimeChange = (e) => {
      const value = parseInt(e.target.value);
      if (value > timeRange.currentMin) {
          setTimeRange(prev => ({
              ...prev,
              currentMax: value
          }));
      }
  };

  const getThumbPosition = (value) => {
   const percent = ((value - timeRange.min) / (timeRange.max - timeRange.min)) * 100;
   return percent;
};

  const formatTime = (hour) => {
   return `${hour.toString().padStart(2, '0')}:00`;
};

    return (
        <>
        <div className={styles['widget__there']}>
           <div className={styles['widget__there-header']}>
              <img src='icons/widget_there_arrow.svg' className={styles['widget__there-arrow']}/>
              <span className={styles['widget__there-title']}>Туда</span>
              <img 
               src={isThereExpanded ? 'icons/widget__shrink.svg' : 'icons/widget__expand.svg'}
               className={styles['widget__expand']}
               onClick={toggleThereExpand}/>
           </div>
           {isThereExpanded && (
            <div className={styles['widget__there-content']}>
                    <span className={styles['departure-time__title']}>Время отбытия</span>
                      <div className={styles['time-range-container']}>
                        <div className={styles['time-range-track']}>
                            <div 
                                className={styles['time-range-fill']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`,
                                    width: `${getThumbPosition(timeRange.currentMax, timeRange.min, timeRange.max) - getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`
                                }}
                            />
                        </div>
                        
                        <div className={styles['time-range-inputs']}>
                            <input
                                type='range'
                                name='time-range-min'
                                min={timeRange.min}
                                max={timeRange.max}
                                value={timeRange.currentMin}
                                onChange={handleMinTimeChange}
                                className={styles['time-range-input']}
                            />
                            <input
                                type='range'
                                name='time-range-max'
                                min={timeRange.min}
                                max={timeRange.max}
                                value={timeRange.currentMax}
                                onChange={handleMaxTimeChange}
                                className={styles['time-range-input']}
                            />
                        </div>
                        
                        <div className={styles['time-range-labels']}>
                            <span 
                                className={styles['time-label-min']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`
                                }}
                            >
                                {formatTime(timeRange.currentMin)}
                            </span>
                            <span 
                                className={styles['time-label-max']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMax, timeRange.min, timeRange.max)}%`
                                }}
                            >
                                {formatTime(timeRange.currentMax)}
                            </span>
                        </div>
                    </div>
                    <span className={styles['arrival-time__title']}>Время прибытия</span>
                      <div className={styles['time-range-container']}>
                        <div className={styles['time-range-track']}>
                            <div 
                                className={styles['time-range-fill']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`,
                                    width: `${getThumbPosition(timeRange.currentMax, timeRange.min, timeRange.max) - getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`
                                }}
                            />
                        </div>
                        
                        <div className={styles['time-range-inputs']}>
                            <input
                                type='range'
                                name='time-range-min'
                                min={timeRange.min}
                                max={timeRange.max}
                                value={timeRange.currentMin}
                                onChange={handleMinTimeChange}
                                className={styles['time-range-input']}
                            />
                            <input
                                type='range'
                                name='time-range-max'
                                min={timeRange.min}
                                max={timeRange.max}
                                value={timeRange.currentMax}
                                onChange={handleMaxTimeChange}
                                className={styles['time-range-input']}
                            />
                        </div>
                        
                        <div className={styles['time-range-labels']}>
                            <span 
                                className={styles['time-label-min']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`
                                }}
                            >
                                {formatTime(timeRange.currentMin)}
                            </span>
                            <span 
                                className={styles['time-label-max']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMax, timeRange.min, timeRange.max)}%`
                                }}
                            >
                                {formatTime(timeRange.currentMax)}
                            </span>
                        </div>
                    </div>
            </div> 
        )}
        </div>
        <div className={styles['widget__back']}>
           <div className={styles['widget__back-header']}>
              <img src='icons/widget_back_arrow.svg' className={styles['widget__back-arrow']}/>
              <span className={styles['widget__there-title']}>Обратно</span>
              <img 
               src={isBackExpanded ? 'icons/widget__shrink.svg' : 'icons/widget__expand.svg'}
               className={styles['widget__expand']}
               onClick={toggleBackExpand}/>
            </div>
            {isBackExpanded && (
            <div className={styles['widget__there-content']}>
                    <span className={styles['departure-time__title']}>Время отбытия</span>
                      <div className={styles['time-range-container']}>
                        <div className={styles['time-range-track']}>
                            <div 
                                className={styles['time-range-fill']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`,
                                    width: `${getThumbPosition(timeRange.currentMax, timeRange.min, timeRange.max) - getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`
                                }}
                            />
                        </div>
                        
                        <div className={styles['time-range-inputs']}>
                            <input
                                type='range'
                                name='time-range-min'
                                min={timeRange.min}
                                max={timeRange.max}
                                value={timeRange.currentMin}
                                onChange={handleMinTimeChange}
                                className={styles['time-range-input']}
                            />
                            <input
                                type='range'
                                name='time-range-max'
                                min={timeRange.min}
                                max={timeRange.max}
                                value={timeRange.currentMax}
                                onChange={handleMaxTimeChange}
                                className={styles['time-range-input']}
                            />
                        </div>
                        
                        <div className={styles['time-range-labels']}>
                            <span 
                                className={styles['time-label-min']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`
                                }}
                            >
                                {formatTime(timeRange.currentMin)}
                            </span>
                            <span 
                                className={styles['time-label-max']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMax, timeRange.min, timeRange.max)}%`
                                }}
                            >
                                {formatTime(timeRange.currentMax)}
                            </span>
                        </div>
                    </div>
                    <span className={styles['arrival-time__title']}>Время прибытия</span>
                      <div className={styles['time-range-container']}>
                        <div className={styles['time-range-track']}>
                            <div 
                                className={styles['time-range-fill']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`,
                                    width: `${getThumbPosition(timeRange.currentMax, timeRange.min, timeRange.max) - getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`
                                }}
                            />
                        </div>
                        
                        <div className={styles['time-range-inputs']}>
                            <input
                                type='range'
                                name='time-range-min'
                                min={timeRange.min}
                                max={timeRange.max}
                                value={timeRange.currentMin}
                                onChange={handleMinTimeChange}
                                className={styles['time-range-input']}
                            />
                            <input
                                type='range'
                                name='time-range-max'
                                min={timeRange.min}
                                max={timeRange.max}
                                value={timeRange.currentMax}
                                onChange={handleMaxTimeChange}
                                className={styles['time-range-input']}
                            />
                        </div>
                        
                        <div className={styles['time-range-labels']}>
                            <span 
                                className={styles['time-label-min']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMin, timeRange.min, timeRange.max)}%`
                                }}
                            >
                                {formatTime(timeRange.currentMin)}
                            </span>
                            <span 
                                className={styles['time-label-max']}
                                style={{
                                    left: `${getThumbPosition(timeRange.currentMax, timeRange.min, timeRange.max)}%`
                                }}
                            >
                                {formatTime(timeRange.currentMax)}
                            </span>
                        </div>
                    </div>
            </div> 
        )}
            
        </div>
        </>
    )
}