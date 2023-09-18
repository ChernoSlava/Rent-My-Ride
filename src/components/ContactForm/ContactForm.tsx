/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line react/prop-types
import React, { useState } from 'react';

import './contactForm.scss';

interface ContactPopupProps {
  onClose: () => void;
}

export const ContactPopup: React.FC<ContactPopupProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <button type="button" className="close" onClick={onClose}>
          &times;
        </button>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
