import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Priscilla Abigail's personal website,"
      + ':)'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome :)</Link>
          </h2>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website! 😃 Please feel free to explore{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link> and{' '} <Link to="/projects">projects</Link>.

      </p>
    </article>
  </Main>
);

export default Index;
