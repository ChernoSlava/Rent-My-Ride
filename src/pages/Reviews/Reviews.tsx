/* eslint-disable max-len */
import React from 'react';

import { Bunner } from '../../components/Bunner/Bunner';
import { CallUs } from '../../components/CallUs/CallUs';
import { Review } from '../../components/Review/Review';

import Alex from './images/Alex.jpg';
import Alunica from './images/Alunica.jpg';
import Bob from './images/Bob.jpg';
import Ling from './images/Ling.jpg';

import './reviews.scss';

const comments = [
  {
    image: Alunica,
    name: 'Alunica Lazar',
    text: 'We rented a car from this website and had an amazing experience! The booking process was smooth, and the rental prices were incredibly reasonable.',
  },
  {
    image: Bob,
    name: 'Bob Archihanov',
    text: "I couldn't be happier with the car rental service provided by this website. The cars were in great condition, and the customer support was exceptional!",
  },
  {
    image: Alex,
    name: 'Alex Arizo',
    text: "Renting a car has never been so hassle-free. The website's user-friendly interface made booking a breeze, and the vehicle exceeded our expectations.",
  },
  {
    image: Ling,
    name: 'Ling Huan Juin',
    text: 'Highly recommend this car rental platform! The vehicle choices were impressive, and the overall rental experience was convenient and enjoyable.',
  },
];

function CommentsRendered() {
  return (
    <>
      {comments.map(comment => (
        <Review
          key={comment.name}
          image={comment.image}
          name={comment.name}
          text={comment.text}
        />
      ))}
    </>
  );
}
export function Reviews() {
  return (
    <>
      <Bunner page="Reviews" />

      <section className="reviews">
        <div className="container">
          <div className="reviews__box">
            <div className="reviews__text">
              <h2 className="reviews__title">Reviewed by Clients</h2>
              <p className="reviews__subtitle">
                Explore the favorable influence we have had on our clients by
                delving into their testimonials. Our clients have encountered
                our services and outcomes, and they are enthusiastic about
                recounting their constructive encounters with you.
              </p>
            </div>
            <ul className="reviews__list">
              <CommentsRendered />
            </ul>
          </div>
        </div>
      </section>

      <CallUs />
    </>
  );
}
