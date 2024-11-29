import { IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import StyledAppBar from './StyledAppBar';

interface AppBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
  displayName: string;
}

const AppBar: React.FC<AppBarProps> = ({ open, handleDrawerOpen, displayName }) => {
  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {displayName}
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
