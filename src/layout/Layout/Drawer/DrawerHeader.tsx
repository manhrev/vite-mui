import { styled } from '@mui/material';
import { APP_BAR_HEIGHT } from '../../consts';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  height: APP_BAR_HEIGHT,
  justifyContent: 'flex-end',
}));

export default DrawerHeader;
