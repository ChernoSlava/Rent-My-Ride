import React from 'react';
import { Link } from 'react-router-dom';

import { Bunner } from '../../components/Bunner/Bunner';
import { FirstScreen } from '../../components/homeComponents';
import { BookForm } from '../../components/homeComponents/BookForm';

import './home.scss';

<Link to="/">Home</Link>;
export function Home() {
  return (
    <>
      <Bunner home />

      <section className="main">
        <FirstScreen />
        <BookForm />
      </section>
    </>
  );
}
