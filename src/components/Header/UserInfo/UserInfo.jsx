import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import BackArrow from '../BackArrow/BackArrow';

import { getUser } from '../../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

import s from './UserInfo.module.scss';
import { useLocation } from 'react-router-dom';

export default function UserInfo() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <div className={s['user-info']}>
      {(location.pathname === '/diary' ||
        location.pathname === '/calculator') && (
        <div className={s['arrow-wrap']}>
          <BackArrow />
        </div>
      )}
      <div>
        <span className={s['user-name']}>{user.name}</span>
        <button
          type="button"
          className={`${s['logout-btn']} ${s.btn}`}
          onClick={() => {
            // console.log()
            dispatch(logout(user))
          }}
        >
          Exit
        </button>
      </div>
    </div>
  );
}
