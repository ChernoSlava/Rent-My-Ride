/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import './bookForm.scss';

export function BookForm() {
  const [carModel, setCarModel] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [rentDays, setRentDays] = useState(1);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Данные отправлены:', carModel, date, location, rentDays);
  };

  return (
    <div className="container bookForm">
      <h2 className="bookForm__title">Book a Car</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__group">
          <label htmlFor="carModel">Car Model</label>
          <select
            id="carModel"
            name="carModel"
            value={carModel}
            onChange={e => setCarModel(e.target.value)}
            required>
            <option value="">Select a Model</option>
            <option value="Model A">Model A</option>
            <option value="Model B">Model B</option>
            <option value="Model C">Model C</option>
          </select>
        </div>
        <div className="form__group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            name="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required>
            <option value="">City</option>
            <option value="Berlin">Berlin</option>
            <option value="Paris">Paris</option>
            <option value="Kishinev">Kishinev</option>
          </select>
        </div>
        <div className="form__group">
          <label htmlFor="rentDays">Rent Days</label>
          <input
            type="number"
            id="rentDays"
            name="rentDays"
            value={rentDays}
            onChange={e => {
              const value = parseInt(e.target.value, 10);
              setRentDays(Math.min(value, 30)); // Ограничиваем до 30 дней
            }}
            min="1"
            max="30"
            required
          />
        </div>
        <button type="submit" className="form__btn">
          Submit
        </button>
      </form>
    </div>
  );
}
