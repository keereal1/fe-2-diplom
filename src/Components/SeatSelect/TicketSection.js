import { useState } from "react";
import styles from '../../Pages/Selection/SelectSeat/SeatSelection.module.css'


export function RenderTicketsSection () {

    const [adultCount, setAdultCount] = useState('');
    const [childCount, setChildCount] = useState('');
    const [childNoSeatCount, setChildNoSeatCount] = useState('');
    
    const handleQuantityChange = (type, value) => {
        const numValue = value.replace(/\D/g, '');
        const limitedValue = numValue === '' ? '' : Math.min(Math.max(0, parseInt(numValue)), 3).toString();
        
        if (type === 'adult') {
            setAdultCount(limitedValue);
        } else if (type === 'child') {
            setChildCount(limitedValue);
        } else if (type === 'childNoSeat') {
            setChildNoSeatCount(limitedValue);
        }
    };
    
    const getDisplayValue = (count, label) => {
        return count === '' ? label : `${label} — ${count}`;
    };
    
    const getRemainingCount = (count) => {
        return count === '' ? 3 : 3 - parseInt(count);
    };

    return (
        <div className={styles['tickets']}>
            <div className={styles['tickets__title']}>Количество билетов</div>
            <div className={styles['tickets__types']}>
                <div className={styles['ticket']}>
                    <input 
                        type='text' 
                        className={styles['quantity']} 
                        name='quantity' 
                        value={getDisplayValue(adultCount, 'Взрослых')}
                        onChange={(e) => {
                            const match = e.target.value.match(/\d+$/);
                            handleQuantityChange('adult', match ? match[0] : '');
                        }}
                        onFocus={(e) => {
                            if (adultCount !== '') {
                                e.target.value = adultCount;
                            } else {
                                e.target.value = '';
                            }
                        }}
                        onBlur={(e) => {
                            e.target.value = getDisplayValue(adultCount, 'Взрослых');
                        }}
                    />
                    <div className={styles['hint']}>
                        Можно добавить еще {getRemainingCount(adultCount)} пассажиров 
                    </div>
                </div>
                <div className={styles['ticket']}>
                    <input 
                        type='text' 
                        className={styles['quantity']} 
                        name='quantity' 
                        value={getDisplayValue(childCount, 'Детских')}
                        onChange={(e) => {
                            const match = e.target.value.match(/\d+$/);
                            handleQuantityChange('child', match ? match[0] : '');
                        }}
                        onFocus={(e) => {
                            if (childCount !== '') {
                                e.target.value = childCount;
                            } else {
                                e.target.value = '';
                            }
                        }}
                        onBlur={(e) => {
                            e.target.value = getDisplayValue(childCount, 'Детских');
                        }}
                    />
                    <div className={styles['hint']}>
                        Можно добавить еще {getRemainingCount(childCount)} детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
                    </div>
                </div>
                <div className={styles['ticket']}>
                    <input 
                        type='text' 
                        className={styles['quantity']} 
                        name='quantity' 
                        value={getDisplayValue(childNoSeatCount, 'Детских "Без места"')}
                        onChange={(e) => {
                            const match = e.target.value.match(/\d+$/);
                            handleQuantityChange('childNoSeat', match ? match[0] : '');
                        }}
                        onFocus={(e) => {
                            if (childNoSeatCount !== '') {
                                e.target.value = childNoSeatCount;
                            } else {
                                e.target.value = '';
                            }
                        }}
                        onBlur={(e) => {
                            e.target.value = getDisplayValue(childNoSeatCount, 'Детских "Без места"');
                        }}
                    />
                </div>
            </div>
            </div>
    )
}
