import React from 'react';

import { Bunner } from '../../components/Bunner/Bunner';
import { CallUs } from '../../components/CallUs/CallUs';
import { Car } from '../../components/Car/Car';

import Audy from './Images/Audy.jpg';
import BMW from './Images/BMW.jpg';
import Renault from './Images/Captur.jpg';
import Chevrolet from './Images/Chevrolet.jpg';
import Rio from './Images/Kio_Rio.jpg';
import Toyota from './Images/Toyota.png';

import './cars.scss';

const cars = [
  {
    carImage: Rio,
    carTitle: 'Kia',
    carPrice: '35€',
    carModel: 'Rio',
    carControl: 'Manual',
    carStars: '★★',
  },
  {
    carImage: BMW,
    carTitle: 'BMW',
    carPrice: '50€',
    carModel: '5C',
    carControl: 'Manual',
    carStars: '★★★',
  },
  {
    carImage: Chevrolet,
    carTitle: 'Chevrolet',
    carPrice: '30€',
    carModel: 'Aveo',
    carControl: 'Manual',
    carStars: '★',
  },
  {
    carImage: Audy,
    carTitle: 'Audy',
    carPrice: '50€',
    carModel: 'Q5',
    carControl: 'Auto',
    carStars: '★★★',
  },
  {
    carImage: Toyota,
    carTitle: 'Toyota',
    carPrice: '40€',
    carModel: 'Camry',
    carControl: 'Manual',
    carStars: '★★',
  },
  {
    carImage: Renault,
    carTitle: 'Renault',
    carPrice: '35€',
    carModel: 'Captur',
    carControl: 'Auto',
    carStars: '★★',
  },
];

function CarsRendered() {
  return (
    <>
      {cars.map(car => (
        <Car
          key={car.carTitle}
          carImage={car.carImage}
          carTitle={car.carTitle}
          carPrice={car.carPrice}
          carModel={car.carModel}
          carControl={car.carControl}
          carStars={car.carStars}
        />
      ))}
    </>
  );
}

export function Cars() {
  return (
    <>
      <Bunner page="Cars" />

      <section className="cars">
        <div className="container">
          <h2 className="cars__title">Our models</h2>
          <ul className="cars__models">
            <CarsRendered />
          </ul>
        </div>
      </section>

      <CallUs />
    </>
  );
}
