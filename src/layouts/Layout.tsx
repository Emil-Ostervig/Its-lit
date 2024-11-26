import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Layout.module.css';
import clsx from 'clsx';

type LayoutProps = React.PropsWithChildren<{}>;

const navItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Lit in React',
    to: '/in-react',
  },
  {
    label: 'Lit Attributes',
    to: '/attributes',
  },
  {
    label: 'Lit Lifecycles',
    to: '/lifecycle',
  },
  {
    label: 'Slot examples',
    to: '/slots',
  },
  {
    label: 'Newsletter widget',
    to: '/newsletter-widget',
  },
];

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <header>
        <nav>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.to} className={styles.navListItem}>
                <NavLink
                  className={({isActive}) =>
                    clsx(styles.navListLink, {
                      [styles.navListItemActive]: isActive,
                    })
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};
