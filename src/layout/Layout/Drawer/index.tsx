import {
  Box,
  Divider,
  Drawer as MUIDrawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
  ListItemText,
  useTheme,
  SxProps,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import DrawerHeader from './DrawerHeader';
import { DRAWER_WIDTH } from '../../consts';
import { CustomRouteObject } from '../../types';
import { matchRoutes, useNavigate } from 'react-router-dom';

interface DrawerProps {
  appBarOpen: boolean;
  handleDrawerClose: () => void;
  routes: CustomRouteObject[];
  title: string;
}

const Drawer: React.FC<DrawerProps> = ({ appBarOpen, handleDrawerClose, routes, title }) => {
  const currentRoute = matchRoutes(routes, location)?.[0];
  const navigate = useNavigate();
  const theme = useTheme();
  const activeSxStyle: SxProps = { color: theme.palette.primary.main };
  const isCurrentRoute = (currentPath?: string) => {
    return (currentPath || '') === (currentRoute?.route.path || '');
  };
  return (
    <MUIDrawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={appBarOpen}
    >
      <DrawerHeader>
        <Box sx={{ justifyContent: 'flex-start', display: 'flex', width: '100%', marginLeft: 1 }}>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List dense>
        {routes.map((route, idx) => (
          <ListItemButton
            sx={{ mt: idx != 0 ? 1 : 0 }}
            selected={isCurrentRoute(route.path)}
            onClick={() => navigate({ pathname: route.path })}
            key={idx}
          >
            <ListItemIcon sx={isCurrentRoute(route.path) ? activeSxStyle : undefined}>
              {route.meta?.icon}
            </ListItemIcon>
            <ListItemText
              primary={route.meta?.displayName}
              sx={isCurrentRoute(route.path) ? activeSxStyle : undefined}
            />
          </ListItemButton>
        ))}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
