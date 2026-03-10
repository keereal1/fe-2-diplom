import styles from './PassengerForm.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { PAYMENT_FORM_ROUTE } from '../../../../src/App/routes/routes';
import { TripDetails } from '../../../Components/TripDetails';

export const PassengerForm = () => {
   const navigate = useNavigate();
   const [passengers, setPassengers] = useState([
      { 
         id: 1, 
         collapsed: false, 
         ageType: 'adult', 
         docType: 'passport',
         isValid: false,
         showBirthCertError: false,
         data: {
            lastName: '',
            firstName: '',
            surname: '',
            sex: '',
            birthDate: '',
            mobility: false,
            series: '',
            number: ''
         },
         errors: {},
         touched: {}
      },
      { 
         id: 2, 
         collapsed: false, 
         ageType: 'adult', 
         docType: 'passport',
         isValid: false,
         showBirthCertError: false,
         data: {
            lastName: '',
            firstName: '',
            surname: '',
            sex: '',
            birthDate: '',
            mobility: false,
            series: '',
            number: ''
         },
         errors: {},
         touched: {}
      }
   ]);

   // Валидация полей
   const validateField = (fieldName, value, passenger) => {
      let error = '';

      switch(fieldName) {
         case 'lastName':
         case 'firstName':
         case 'surname':
            if (!value || !value.trim()) {
               error = 'Поле обязательно для заполнения';
            } else if (!/^[А-Яа-яЁё\s-]+$/.test(value)) {
               error = 'Только кириллица, пробелы и дефисы';
            } else if (value.trim().length < 2) {
               error = 'Минимум 2 символа';
            }
            break;

         case 'birthDate':
            if (!value) {
               error = 'Дата рождения обязательна';
            } else {
               const birthDate = new Date(value);
               const today = new Date();
               const age = today.getFullYear() - birthDate.getFullYear();
               const monthDiff = today.getMonth() - birthDate.getMonth();
               const adjustedAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
               
               if (birthDate > today) {
                  error = 'Дата не может быть в будущем';
               }  else if (passenger.ageType === 'child' && adjustedAge >= 14) {
                  error = 'Ребенку должно быть меньше 14';
               } else if (adjustedAge > 120) {
                  error = 'Некорректная дата';
               }
            }
            break;

         case 'sex':
            if (!value) {
               error = 'Выберите пол';
            }
            break;

         case 'series':
            if (passenger.docType === 'passport') {
               if (!value) {
                  error = 'Серия обязательна';
               } else if (!/^\d{4}$/.test(value.replace(/\s/g, ''))) {
                  error = 'Серия: 4 цифры';
               }
            }
            break;

         case 'number':
            if (passenger.docType === 'passport') {
               if (!value) {
                  error = 'Номер обязателен';
               } else if (!/^\d{6}$/.test(value.replace(/\s/g, ''))) {
                  error = 'Номер: 6 цифр';
               }
            } else if (passenger.docType === 'birth-cert') {
               if (!value) {
                  error = 'Номер обязателен';
               } else if (!/^[IVXLCDM]{1,4}-[А-ЯЁ]{2}-\d{6}$/.test(value.replace(/\s/g, ''))) {
                  error = 'Формат: VIII-ЫП-123456';
               }
            }
            break;

         default:
            break;
      }

      return error;
   };

   // Проверка валидности формы 
   const isPassengerFormValid = (passenger) => {
      const { data } = passenger;
      const requiredFields = ['lastName', 'firstName', 'surname', 'sex', 'birthDate'];
      
      if (passenger.docType === 'passport') {
         requiredFields.push('series', 'number');
      } else {
         requiredFields.push('number');
      }

      const allFieldsFilled = requiredFields.every(field => {
         const value = data[field];
         return value && value.toString().trim() !== '';
      });

      const hasNoErrors = Object.keys(passenger.errors).length === 0 || 
                          Object.values(passenger.errors).every(err => !err);

      return allFieldsFilled && hasNoErrors;
   };

   // Обновление данных пассажира
   const updatePassengerData = (id, field, value) => {
      setPassengers(passengers.map(p => {
         if (p.id === id) {
            const updatedData = { ...p.data, [field]: value };
            const updatedPassenger = { ...p, data: updatedData };
            const error = validateField(field, value, updatedPassenger);
            const updatedErrors = { ...p.errors };
            
            if (error) {
               updatedErrors[field] = error;
            } else {
               delete updatedErrors[field];
            }

            // Ошибка блока свиедетельства о рождении
            let showBirthCertError = p.showBirthCertError;
            if (field === 'number' && p.docType === 'birth-cert') {
               showBirthCertError = !!error && p.touched.number;
            }

            updatedPassenger.errors = updatedErrors;
            updatedPassenger.touched = { ...p.touched, [field]: true };
            updatedPassenger.isValid = isPassengerFormValid(updatedPassenger);
            updatedPassenger.showBirthCertError = showBirthCertError;
            
            return updatedPassenger;
         }
         return p;
      }));
   };


   const closeBirthCertError = (id) => {
      setPassengers(passengers.map(p => 
         p.id === id ? { ...p, showBirthCertError: false } : p
      ));
   };

   // Пол
   const handleSexChange = (id, sex) => {
      setPassengers(passengers.map(p => {
         if (p.id === id) {
            const updatedData = { ...p.data, sex };
            const updatedPassenger = { ...p, data: updatedData };
            const error = validateField('sex', sex, updatedPassenger);
            const updatedErrors = { ...p.errors };
            
            if (error) {
               updatedErrors.sex = error;
            } else {
               delete updatedErrors.sex;
            }

            updatedPassenger.errors = updatedErrors;
            updatedPassenger.touched = { ...p.touched, sex: true };
            updatedPassenger.isValid = isPassengerFormValid(updatedPassenger);
            
            return updatedPassenger;
         }
         return p;
      }));
   };

   // Добавление нового пассажира
   const addPassenger = () => {
      const newId = passengers.length > 0 ? Math.max(...passengers.map(p => p.id)) + 1 : 1;
      setPassengers([...passengers, { 
         id: newId, 
         collapsed: false, 
         ageType: 'adult',
         docType: 'passport',
         isValid: false,
         showBirthCertError: false,
         data: {
            lastName: '',
            firstName: '',
            surname: '',
            sex: '',
            birthDate: '',
            mobility: false,
            series: '',
            number: ''
         },
         errors: {},
         touched: {}
      }]);
   };

   // Удаление пассажира
   const removePassenger = (id) => {
      setPassengers(passengers.filter(p => p.id !== id));
   };

   // Переключение свернуто/развернуто
   const toggleCollapse = (id) => {
      setPassengers(passengers.map(p => 
         p.id === id ? { ...p, collapsed: !p.collapsed } : p
      ));
   };

   // Изменение типа возраста
   const handleAgeTypeChange = (id, value) => {
      setPassengers(passengers.map(p => {
         if (p.id === id) {
            const updatedPassenger = {
               ...p, 
               ageType: value,
               docType: value === 'child' ? 'birth-cert' : 'passport',
               showBirthCertError: false,
               data: {
                  ...p.data,
                  series: '',
                  number: ''
               },
               errors: {},
               touched: {}
            };
            if (p.data.birthDate) {
               const error = validateField('birthDate', p.data.birthDate, updatedPassenger);
               if (error) {
                  updatedPassenger.errors.birthDate = error;
                  updatedPassenger.touched.birthDate = true;
               }
            }
            updatedPassenger.isValid = isPassengerFormValid(updatedPassenger);
            return updatedPassenger;
         }
         return p;
      }));
   };

   // Изменение типа документа
   const handleDocTypeChange = (id, value) => {
      setPassengers(passengers.map(p => {
         if (p.id === id) {
            return {
               ...p, 
               docType: value,
               showBirthCertError: false,
               data: {
                  ...p.data,
                  series: '',
                  number: ''
               },
               errors: {
                  ...p.errors,
                  series: undefined,
                  number: undefined
               },
               touched: {
                  ...p.touched,
                  series: false,
                  number: false
               },
               isValid: false
            };
         }
         return p;
      }));
   };

   // Валидация всех полей перед переходом
   const validateAllFields = (passenger) => {
      const errors = {};
      const touched = {};
      const fields = ['lastName', 'firstName', 'surname', 'sex', 'birthDate'];
      
      if (passenger.docType === 'passport') {
         fields.push('series', 'number');
      } else {
         fields.push('number');
      }

      fields.forEach(field => {
         const error = validateField(field, passenger.data[field], passenger);
         if (error) {
            errors[field] = error;
         }
         touched[field] = true;
      });

      return { errors, touched };
   };

   // Переход к следующему пассажиру
   const goToNextPassenger = (currentId) => {
      const currentPassenger = passengers.find(p => p.id === currentId);
      const { errors, touched } = validateAllFields(currentPassenger);

      if (Object.keys(errors).length > 0) {
         const showBirthCertError = currentPassenger.docType === 'birth-cert' && errors.number;
         
         setPassengers(passengers.map(p => 
            p.id === currentId ? { ...p, errors, touched, showBirthCertError } : p
         ));
         return;
      }

      const currentIndex = passengers.findIndex(p => p.id === currentId);
      if (currentIndex < passengers.length - 1) {
         setPassengers(passengers.map((p, idx) => ({
            ...p,
            collapsed: idx === currentIndex ? true : (idx === currentIndex + 1 ? false : p.collapsed)
         })));
      } else {
         setPassengers(passengers.map(p => 
            p.id === currentId ? { ...p, collapsed: true } : p
         ));
      }
   };

   const allFormsValid = passengers.every(p => p.isValid);

   const handleNextStep = () => {
      if (allFormsValid) {
         navigate(PAYMENT_FORM_ROUTE);
      } else {
         setPassengers(passengers.map(p => {
            if (!p.isValid) {
               const { errors, touched } = validateAllFields(p);
               const showBirthCertError = p.docType === 'birth-cert' && errors.number;
               return { ...p, errors, touched, collapsed: false, showBirthCertError };
            }
            return p;
         }));
      }
   };

   return (
      <section className={styles['main-container']}>
         <ul className={styles['navbar']}>
            <div className={styles['wrp', 'wrp__active']}>
               <li className={styles['navbar__link']}>
                  <span className={styles['navbar__link_number']}>1</span>
                  <a href='#' className={styles['navbar__link_name']}>Билеты</a>
               </li>
               <img src='icons\navbar_arrow.svg' className={styles['navbar__arrow']} alt="arrow"/>
            </div>
            <div className={styles['wrp', 'wrp__active']}>
               <li className={styles['navbar__link']}>
                  <span className={styles['navbar__link_number']}>2</span>
                  <a href='#' className={styles['navbar__link_name']}>Пассажиры</a>
               </li>
               <img src='icons\navbar_arrow.svg' className={styles['navbar__arrow']} alt="arrow"/>
            </div>
            <div className={styles['wrp']}>
               <li className={styles['navbar__link']}>
                  <span className={styles['navbar__link_number']}>3</span>
                  <a href='#' className={styles['navbar__link_name']}>Оплата</a>
               </li>
               <img src='icons\navbar_arrow.svg' className={styles['navbar__arrow']} alt="arrow"/>
            </div>
            <div className={styles['wrp']}>
               <li className={styles['navbar__link']}>
                  <span className={styles['navbar__link_number']}>4</span>
                  <a href='#' className={styles['navbar__link_name']}>Проверка</a>
               </li>
            </div>
         </ul>
         <div className={styles['main-page']}>
            <aside className={styles['widget']}>
               <div className={styles['widget__header']}>
                  Детали поездки
               </div>
               <TripDetails/>
               <div className={styles['widget__total']}>
                  <span className={styles['widget__total-text']}>Итог</span>
                  <span className={styles['widget__total-value']}>
                     7 760
                     <img src='icons/currency__icon_total.svg' className={styles['currency-icon_total']} alt="currency"/>
                  </span>
               </div>
            </aside>
            <main className={styles['passengers']}>
               {passengers.map((passenger, index) => (
                  <article key={passenger.id} className={styles['passenger']}>
                     <div className={styles['passenger__header']}>
                        {passenger.collapsed ? (
                           <img 
                              src='icons/passenger__plus.svg' 
                              className={styles['plus__icon']}
                              onClick={() => toggleCollapse(passenger.id)}
                              style={{ cursor: 'pointer' }}
                              alt="expand"
                           />
                        ) : (
                           <img 
                              src='icons/passenger__minus.svg' 
                              className={styles['minus__icon']}
                              onClick={() => toggleCollapse(passenger.id)}
                              style={{ cursor: 'pointer' }}
                              alt="collapse"
                           />
                        )}
                        <span className={styles['passenger__header-title']}>
                           Пассажир {index + 1}
                        </span>
                        {passenger.isValid && passenger.collapsed && (
                           <div className={styles['success__container']} style={{ marginLeft: 'auto', marginRight: '10px' }}>
                              <img src='icons/form_success.svg' className={styles['success__icon']} alt="success"/>
                              <div className={styles['success__text']}>Готово</div>
                           </div>
                        )}
                        {!passenger.collapsed && (
                           <img 
                              src='icons/passenger__close.svg' 
                              className={styles['close__icon']}
                              onClick={() => removePassenger(passenger.id)}
                              style={{ cursor: 'pointer' }}
                              alt="close"
                           />
                        )}
                     </div>
                     
                     {!passenger.collapsed && (
                        <form className={styles['passenger__form']}>
                           <div className={styles['passenger__bio']}>
                              <div className={styles['select__container']}>
                                 <label htmlFor={`age-${passenger.id}`} className={styles['input__label']}/>
                                 <select 
                                    id={`age-${passenger.id}`} 
                                    className={styles['select']}
                                    value={passenger.ageType}
                                    onChange={(e) => handleAgeTypeChange(passenger.id, e.target.value)}
                                 >
                                    <option value='adult'>Взрослый</option>
                                    <option value='child'>Ребенок</option>
                                 </select>
                              </div>
                              <div className={styles['fio']}>
                                 <div className={styles['input__container']}>
                                    <label htmlFor={`last-name-${passenger.id}`} className={styles['input__label']}>
                                       Фамилия<span style={{color: 'red', marginLeft: '2px'}}>*</span>
                                    </label>
                                    <input 
                                       type='text' 
                                       id={`last-name-${passenger.id}`} 
                                       name='last-name' 
                                       className={`${styles['bio__input']} ${passenger.touched.lastName && passenger.errors.lastName ? styles['input__error'] : ''}`}
                                       value={passenger.data.lastName}
                                       onChange={(e) => updatePassengerData(passenger.id, 'lastName', e.target.value)}
                                       onBlur={(e) => updatePassengerData(passenger.id, 'lastName', e.target.value)}
                                    />
                                    {passenger.touched.lastName && passenger.errors.lastName && (
                                       <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                          {passenger.errors.lastName}
                                       </span>
                                    )}
                                 </div>
                                 <div className={styles['input__container']}>
                                    <label htmlFor={`name-${passenger.id}`} className={styles['input__label']}>
                                       Имя<span style={{color: 'red', marginLeft: '2px'}}>*</span>
                                    </label>
                                    <input 
                                       type='text' 
                                       id={`name-${passenger.id}`} 
                                       name='name' 
                                       className={`${styles['bio__input']} ${passenger.touched.firstName && passenger.errors.firstName ? styles['input__error'] : ''}`}
                                       value={passenger.data.firstName}
                                       onChange={(e) => updatePassengerData(passenger.id, 'firstName', e.target.value)}
                                       onBlur={(e) => updatePassengerData(passenger.id, 'firstName', e.target.value)}
                                    />
                                    {passenger.touched.firstName && passenger.errors.firstName && (
                                       <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                          {passenger.errors.firstName}
                                       </span>
                                    )}
                                 </div>
                                 <div className={styles['input__container']}>
                                    <label htmlFor={`surname-${passenger.id}`} className={styles['input__label']}>
                                       Отчество<span style={{color: 'red', marginLeft: '2px'}}>*</span>
                                    </label>
                                    <input 
                                       type='text' 
                                       id={`surname-${passenger.id}`} 
                                       name='surname' 
                                       className={`${styles['bio__input']} ${passenger.touched.surname && passenger.errors.surname ? styles['input__error'] : ''}`}
                                       value={passenger.data.surname}
                                       onChange={(e) => updatePassengerData(passenger.id, 'surname', e.target.value)}
                                       onBlur={(e) => updatePassengerData(passenger.id, 'surname', e.target.value)}
                                    />
                                    {passenger.touched.surname && passenger.errors.surname && (
                                       <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                          {passenger.errors.surname}
                                       </span>
                                    )}
                                 </div>
                              </div>
                              <div className={styles['sex__birth-date']}>
                                 <div className={styles['sex__container']}>
                                    <span className={styles['sex__title']}>
                                       Пол<span style={{color: 'red', marginLeft: '2px'}}>*</span>
                                    </span>
                                    <div className={styles['sex__choises']}>
                                       <button 
                                          type='button' 
                                          className={`${styles['sex__btn']} ${passenger.data.sex === 'male' ? styles['sex__btn-active'] : ''}`}
                                          onClick={() => handleSexChange(passenger.id, 'male')}
                                       >
                                          М
                                       </button>
                                       <button 
                                          type='button' 
                                          className={`${styles['sex__btn']} ${passenger.data.sex=== 'female' ? styles['sex__btn-active'] : ''}`}
                                          onClick={() => handleSexChange(passenger.id, 'female')}
                                       >
                                          Ж
                                       </button>
                                    </div>
                                    {passenger.touched.sex && passenger.errors.sex && (
                                       <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                          {passenger.errors.sex}
                                       </span>
                                    )}
                                 </div>
                                 <div className={styles['birth-date']}>
                                    <div className={styles['input__container']}>
                                       <label htmlFor={`date-birth-${passenger.id}`} className={styles['input__label']}>
                                          Дата рождения<span style={{color: 'red', marginLeft: '2px'}}>*</span>
                                       </label>
                                       <input 
                                          type='date' 
                                          id={`date-birth-${passenger.id}`} 
                                          name='date-birth' 
                                          className={`${styles['date__input']} ${passenger.touched.birthDate && passenger.errors.birthDate ? styles['input__error'] : ''}`}
                                          value={passenger.data.birthDate}
                                          onChange={(e) => updatePassengerData(passenger.id, 'birthDate', e.target.value)}
                                          onBlur={(e) => updatePassengerData(passenger.id, 'birthDate', e.target.value)}
                                       />
                                       {passenger.touched.birthDate && passenger.errors.birthDate && (
                                          <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                             {passenger.errors.birthDate}
                                          </span>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <div className={styles['mobility__container']}>
                                 <input 
                                    type='checkbox' 
                                    className={styles['mobility']} 
                                    id={`mobility-${passenger.id}`}
                                    checked={passenger.data.mobility}
                                    onChange={(e) => updatePassengerData(passenger.id, 'mobility', e.target.checked)}
                                 />
                                 <label htmlFor={`mobility-${passenger.id}`} className={styles['mobility__label']}>
                                    Ограниченная мобильность
                                 </label>
                              </div>
                           </div>
                           <div className={styles['passenger__docs']}>
                              <div className={styles['docs']}>
                                 <div className={styles['input__container']}>
                                    <label htmlFor={`doc__type-${passenger.id}`} className={styles['input__label']}>
                                       Тип документа
                                    </label>
                                    <select 
                                       id={`doc__type-${passenger.id}`} 
                                       name='doc__type' 
                                       className={styles['docs__input']}
                                       value={passenger.docType}
                                       onChange={(e) => handleDocTypeChange(passenger.id, e.target.value)}
                                       disabled={passenger.ageType === 'child'}
                                    >
                                       <option value='passport'>Паспорт РФ</option>
                                       <option value='birth-cert'>Свидетельство о рождении</option>
                                    </select>
                                 </div>
                                 
                                 {passenger.docType === 'passport' ? (
                                    <>
                                       <div className={styles['input__container']}>
                                          <label htmlFor={`series-${passenger.id}`} className={styles['input__label']}>
                                             Серия<span style={{color: 'red', marginLeft: '2px'}}>*</span>
                                          </label>
                                          <input 
                                             type='text' 
                                             id={`series-${passenger.id}`} 
                                             name='series' 
                                             className={`${styles['docs__input']} ${passenger.touched.series && passenger.errors.series ? styles['input__error'] : ''}`}
                                             placeholder='_ _ _ _'
                                             maxLength='4'
                                             value={passenger.data.series}
                                             onChange={(e) => {
                                                const value = e.target.value.replace(/\D/g, '');
                                                updatePassengerData(passenger.id, 'series', value);
                                             }}
                                             onBlur={(e) => updatePassengerData(passenger.id, 'series', e.target.value)}
                                          />
                                          {passenger.touched.series && passenger.errors.series && (
                                             <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                                {passenger.errors.series}
                                             </span>
                                          )}
                                       </div>
                                       <div className={styles['input__container']}>
                                          <label htmlFor={`number-${passenger.id}`} className={styles['input__label']}>
                                             Номер<span style={{color: 'red', marginLeft: '2px'}}>*</span>
                                          </label>
                                          <input 
                                             type='text' 
                                             id={`number-${passenger.id}`} 
                                             name='number' 
                                             className={`${styles['docs__input']} ${passenger.touched.number && passenger.errors.number ? styles['input__error'] : ''}`}
                                             placeholder='_ _ _ _ _ _'
                                             maxLength='6'
                                             value={passenger.data.number}
                                             onChange={(e) => {
                                                const value = e.target.value.replace(/\D/g, '');
                                                updatePassengerData(passenger.id, 'number', value);
                                             }}
                                             onBlur={(e) => updatePassengerData(passenger.id, 'number', e.target.value)}
                                          />
                                          {passenger.touched.number && passenger.errors.number && (
                                             <span style={{color: 'red', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                                                {passenger.errors.number}
                                             </span>
                                          )}
                                       </div>
                                    </>
                                 ) : (
                                    <div className={styles['input__container']}>
                                       <label htmlFor={`birth-cert__number-${passenger.id}`} className={styles['input__label']}>
                                          Номер<span style={{color: 'red', marginLeft: '2px'}}>*</span>
                                       </label>
                                       <input 
                                          type='text'
                                          placeholder='VIII-ЫП-123456'
                                          id={`birth-cert__number-${passenger.id}`} 
                                          name='birth-cert__number' 
                                          className={`${styles['docs__input']} ${passenger.touched.number && passenger.errors.number ? styles['input__error'] : ''}`}
                                          maxLength='14'
                                          value={passenger.data.number}
                                          onChange={(e) => {
                                             const value = e.target.value.toUpperCase();
                                             updatePassengerData(passenger.id, 'number', value);
                                          }}
                                          onBlur={(e) => updatePassengerData(passenger.id, 'number', e.target.value)}
                                       />
                                    </div>
                                 )}
                              </div>
                           </div>
                           
                           {/* Блок ошибки свидетельства о рождении */}
                           {passenger.showBirthCertError && passenger.docType === 'birth-cert' ? (
                            <div className={styles['error']}>
                                <img 
                                    src='icons/error_close.svg' 
                                    className={styles['error_close']}
                                    onClick={() => closeBirthCertError(passenger.id)}
                                    style={{ cursor: 'pointer' }}
                                    alt="close error"
                                />
                                <p>
                                    Номер свидетельства о рождении указан некорректно <br/>
                                    Пример: <span className={styles['number__example']}>VIII-ЫП-123456</span> 
                                </p>
                            </div>
                            ) : (
                            /* Следующий пассажир */
                            <div className={`${styles['next-passanger__container']} ${passenger.isValid ? styles['next-passanger__container--success'] : ''}`}>
                                {passenger.isValid && (
                                    <div className={styles['success__container']}>
                                        <img src='icons/form_success.svg' className={styles['success__icon']} alt="success"/>
                                        <div className={styles['success__text']}>Готово</div>
                                    </div>
                                )}
                                <button 
                                    type='button' 
                                    className={styles['next-passanger__btn']}
                                    onClick={() => goToNextPassenger(passenger.id)}
                                >
                                    Следующий пассажир
                                </button>
                            </div>
                            )}
                        </form>
                     )}
                  </article>
               ))}

               <article className={styles['passenger__add']} onClick={addPassenger} style={{ cursor: 'pointer' }}>
                  <div className={styles['passenger__add_header']}>
                     <span className={styles['passenger__add_header-title']}>Добавить пассажира</span>     
                     <img src='icons/passenger__add.svg' className={styles['add__icon']} alt="add"/>
                  </div>   
               </article>

               <section className={styles['next']}>
                  <button 
                     type='button' 
                     className={styles['next__btn']} 
                     onClick={handleNextStep}
                     disabled={!allFormsValid}
                     style={{
                        opacity: allFormsValid ? 1 : 0.5,
                        cursor: allFormsValid ? 'pointer' : 'not-allowed'
                     }}
                  >
                     Далее
                  </button>
                  {!allFormsValid && (
                     <div style={{color: 'red', fontSize: '14px', marginTop: '10px', textAlign: 'center'}}>
                        Заполните все обязательные поля для всех пассажиров
                     </div>
                  )}
               </section>
            </main>
         </div>
      </section>
   );
};