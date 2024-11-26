import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Layout.module.css';

type LayoutProps = React.PropsWithChildren<{}>;

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/in-react">Lit in React</NavLink>
            </li>
            <li>
              <NavLink to="/attributes">Lit Attributes</NavLink>
            </li>
            <li>
              <NavLink to="/lifecycle">Lit Lifecycles</NavLink>
            </li>
            <li>
              <NavLink to="/slots">Slot examples</NavLink>
            </li>
            <li>
              <NavLink to="/newsletter-widget">Newsletter widget</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};
