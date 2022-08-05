import logoMobile from '../../assets/images/logo/logo-mobile.png';
import logoTablet from '../../assets/images/logo/logo-tablet.png';
import logoDesktop from '../../assets/images/logo/logo-desktop.png';
import s from './Header.module.scss';
import { useSelector } from 'react-redux';
import { getIslogin } from '../../redux/auth/auth-selectors';

import AuthNav from './AuthNav';
import UserInfo from './UserInfo/UserInfo';
import Navigation from './Navigation';

function Header() {
  const isLogin = useSelector(getIslogin);
  return (
    <header className={s.header}>
      <div>
        <a href="/diary">
          {isLogin ? (
            <img
              className={s['logo-mobile-login']}
              src={logoTablet}
              alt="logo"
            />
          ) : (
            <img className={s['logo-mobile']} src={logoMobile} alt="logo" />
          )}
          <img className={s['logo-tablet']} src={logoTablet} alt="logo" />
          <img className={s['logo-desktop']} src={logoDesktop} alt="logo" />
        </a>
      </div>
      {isLogin ? (
        <div className={s['nav-wrap']}>
          <Navigation />
          <UserInfo />
        </div>
      ) : (
        <AuthNav />
      )}
    </header>
  );
}
export default Header;
