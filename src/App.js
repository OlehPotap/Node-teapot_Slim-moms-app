import {
  Routes,
  Route,
  Navigate,
  // Link
} from 'react-router-dom';
import { lazy } from 'react';
import PublicRoute from './utils/PrivateRoute.js';
import PrivateRoute from './utils/PublicRoute.js';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports.js';
import { current } from './redux/auth/auth-operations.js';
import { checkToken } from './redux/auth/auth-selectors.js';

import { allCategories } from './redux/categories/categories-operations.js';

import MobileFormDiary from './pages/DiaryPage/MobileFormDiary/MobileFormDiary.jsx';


const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage.jsx'));
const CalculatorPage = lazy(() =>
  import('./pages/CalculatorPage/CalculatorPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

function App() {
const token = useSelector(checkToken)
  const dispatch = useDispatch()
  useEffect (()=>{
    dispatch(allCategories())
    if (token) { dispatch(current())}
    // eslint-disable-next-line
  }, [dispatch])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/diary/add-mobile" element={<MobileFormDiary />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
