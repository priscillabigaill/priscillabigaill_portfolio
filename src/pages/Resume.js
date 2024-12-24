import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Resume = () => (
  <Main
    title="Resume"
    description="Priscilla Abigail's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">Priscilla Abigail&apos;s Resume</Link>
          </h2>
        </div>
      </header>
      <img src={`${PUBLIC_URL}/images/PriscillaAbigailM_resume.png`} alt="" style={{ width: '700px', height: 'auto' }} />
    </article>
  </Main>
);

export default Resume;
