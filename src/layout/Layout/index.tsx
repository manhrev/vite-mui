import { Box, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { Route, Routes, matchRoutes, useLocation } from 'react-router-dom';

import AppBar from './AppBar';
import Main from './Main';
import { CustomRouteObject } from '../types';
import Drawer from './Drawer';

interface LayoutProps {
  routes: CustomRouteObject[];
}

const Layout: React.FC<LayoutProps> = ({ routes }) => {
  const [appBarOpen, setAppBarOpen] = useState(true);
  const handleDrawerOpen = () => {
    setAppBarOpen(true);
  };
  const handleDrawerClose = () => {
    setAppBarOpen(false);
  };
  const location = useLocation();
  const currentRoute = matchRoutes(routes, location)?.[0];
  const headerName = currentRoute?.route.meta?.displayName || '';

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Drawer
          title="Dashboard"
          appBarOpen={appBarOpen}
          handleDrawerClose={handleDrawerClose}
          routes={routes}
        />
        <AppBar open={appBarOpen} displayName={headerName} handleDrawerOpen={handleDrawerOpen} />
        <Main open={appBarOpen}>
          <Routes>
            {routes.map((route) => {
              return <Route path={route.path} element={route.element} key={route.path} />;
            })}
          </Routes>
        </Main>
      </Box>
    </>
  );
};

export default Layout;
