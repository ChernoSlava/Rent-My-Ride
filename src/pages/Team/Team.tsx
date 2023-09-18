import React from 'react';

import { Bunner } from '../../components/Bunner/Bunner';
import { CallUs } from '../../components/CallUs/CallUs';
import { Employee } from '../../components/Employee/Employee';

import Default from './images/default.jpg';
import Developer from './images/developer.jpg';
import Tester from './images/QA.jpg';

import './team.scss';

const team = [
  {
    img: Developer,
    name: 'Viacheslav Chernogorov',
    job: 'Project manager & Fullstack Developer',
  },
  { img: Tester, name: 'Svetlana Lozan', job: 'Designer UI/UX & QA Engineer' },
  { img: Default, name: 'Izabella Jacobs', job: 'Photographer' },
  { img: Default, name: 'Tobias Ashley', job: 'Car Detailist' },
  { img: Default, name: 'Zack Solis', job: 'Mechanic' },
  { img: Default, name: 'Neve Ali', job: 'Manager' },
];

function TeamRendered() {
  return (
    <>
      {team.map(player => (
        <Employee name={player.name} img={player.img} job={player.job} />
      ))}
    </>
  );
}
export function Team() {
  return (
    <>
      <Bunner page="Team" />

      <section className="team">
        <div className="container">
          <h2 className="team__title">Our team</h2>
          <div className="team__box">
            <TeamRendered />
          </div>
        </div>
      </section>

      <CallUs />
    </>
  );
}
