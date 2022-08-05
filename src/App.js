import {
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import { lazy } from 'react';
import PublicRoute from './utils/PrivateRoute.js';
import PrivateRoute from './utils/PublicRoute.js';
import Header from './components/Header/Header';

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
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        {/* <Route element={<PrivateRoute />}> */}
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
