import MenuIcon from '@mui/icons-material/Menu';
import ShIcon from '@mui/icons-material/AccessibilityNewSharp';

import Page1 from '../pages/Page1';
import { CustomRouteObject } from '../layout/types';

export const routes: CustomRouteObject[] = [
  {
    path: '/page1',
    element: <Page1 />,
    meta: {
      displayName: 'Page 1',
      icon: <MenuIcon />,
    },
  },
  {
    path: '/page2',
    element: <div>Page 2 content</div>,
    meta: {
      displayName: 'Page 2',
      icon: <ShIcon />,
    },
  },
];
