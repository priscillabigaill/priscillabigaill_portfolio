import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Hello! I’m Abigail</h2>
        <p>
          Venture around to see some of my work. ⸜(｡˃ ᵕ ˂ )⸝♡
        </p>
        {/* <Link to="/resume" className="button">
          Resume
        </Link> */}
      </header>
    </section>

    {/* <section className="blurb">
      <h2>Hello! I’m Abigail</h2>
      <p>
        Venture around to see some of my work. ⸜(｡˃ ᵕ ˂ )⸝♡
        Hi, I&apos;m Michael. I am a{' '}
        <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC
        alumnus, and the co-founder and CTO of{' '}
        <a href="https://promptfoo.dev">Promptfoo</a>. Previously, I
        was VP of Engineering at <a href="https://usesmileid.com">SmileID</a>,
        co-founder and CTO of <a href="https://arthena.com">Arthena</a>, and
        co-founded <a href="https://matroid.com">Matroid</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Resume
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section> */}

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Priscilla Abigail<Link to="/"> priscillabigaill.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
