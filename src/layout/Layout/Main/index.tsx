import { styled } from '@mui/material/styles';

import { APP_BAR_HEIGHT, DRAWER_WIDTH, MAIN_PADDING } from '../../consts';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  minHeight: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
  // backgroundColor: theme.palette.background.,
  padding: theme.spacing(MAIN_PADDING),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  marginTop: APP_BAR_HEIGHT,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default Main;
