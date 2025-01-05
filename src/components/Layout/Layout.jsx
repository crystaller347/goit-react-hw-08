import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar.jsx';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
