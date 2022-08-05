import { NavLink } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import s from './Header.module.scss';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav
        className={
          isOpen
            ? `${s['user-nav-burger']} ${s.nav}`
            : `${s['user-nav']} ${s.nav}`
        }
      >
        <NavLink
          to="/diary"
          exact="true"
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.link}` : s.link
          }
          onClick={() => setOpen(false)}
        >
          Diary
        </NavLink>
        <NavLink
          to="/calculator"
          exact="true"
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.link}` : s.link
          }
          onClick={() => setOpen(false)}
        >
          Calculator
        </NavLink>
      </nav>

      <div className={s['btn-menu']}>
        <div>
          <Hamburger
            direction="left"
            size={18}
            distance="sm"
            color="#212121"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
