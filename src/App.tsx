import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { About, Cars, Contacts, Home, Review, Team } from './pages';

import './styles/style.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cars" element={<Cars />} />
        <Route path="review" element={<Review />} />
        <Route path="team" element={<Team />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
