import React from 'react';

import { Description } from '../../components/About/Description';
import { PlanTrip } from '../../components/About/PlanTrip';
import { Bunner } from '../../components/Bunner/Bunner';
import { CallUs } from '../../components/CallUs/CallUs';

export function About() {
  return (
    <>
      <Bunner page="About" />

      <section className="about">
        <Description />
        <PlanTrip />
      </section>

      <CallUs />
    </>
  );
}
