import React from 'react';

import { Description } from '../../components/About/Description';
import { PlanTrip } from '../../components/About/PlanTrip';

export function About() {
  return (
    <section className="about">
      <Description />
      <PlanTrip />
    </section>
  );
}
