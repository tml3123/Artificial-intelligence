import { Outlet } from 'react-router-dom';
import Nav from '../Header/nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;