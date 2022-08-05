import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

export default function AuthNav() {
  return (
    <div className={`${s['auth-nav']} ${s.nav}`}>
      <NavLink
        to="/login"
        exact="true"
        className={({ isActive }) =>
          isActive ? `${s.active} ${s.link}` : s.link
        }
      >
        Sign in
      </NavLink>
      <NavLink
        to="/register"
        exact="true"
        className={({ isActive }) =>
          isActive ? `${s.active} ${s.link}` : s.link
        }
      >
        Registration
      </NavLink>
    </div>
  );
}
