import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout.jsx';
import { PrivateRoute } from '../PrivateRoute.jsx';
import { RestrictedRoute } from '../RestrictedRoute.jsx';
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

return isRefreshing ? (
  <b>Refreshing user...</b>
) : (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        }
      />
    </Routes>
  </Layout>
);
}