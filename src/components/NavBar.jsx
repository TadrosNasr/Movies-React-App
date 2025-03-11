import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const user = useSelector(state => state.userInfo.user);
  const favCounter = useSelector(state=> state.favourites.counter);

console.log('from navbar: '+favCounter);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#ffb74d',color: '#3c3c3c', width: '100vw' }}> 
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/movies"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Movies
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size= "large"
              aria-label= "open menu"
              aria-controls= "menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/movies">Home</MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/about">About</MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/favourites">Favourites</MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/signup">Sign Up</MenuItem>
              {/* {user && <MenuItem onClick={handleCloseNavMenu} component={Link} to="/profile">Profile</MenuItem>} */}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} to="/movies">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Badge badgeContent={favCounter} color="error">
                    <Button color="inherit" component={Link} to="/favourites">Favourites</Button>
                </Badge>
            </Box>
            
            {!user.username?<Button color="inherit" component={Link} to="/signup">Sign Up</Button>:null}
            
            {/* {user && <Button color="inherit" component={Link} to="/profile">Profile</Button>} */}
          </Box>
          
          <Box sx={{ display: { xs: 'block', md: 'none' }, marginRight:3 }}>
            <Link className='nav-link' to='/favourites'>
                <Badge badgeContent={favCounter} color="error">
                    <FavoriteIcon style={{ color: 'red', fontSize: 25 }} className='my-2'/>
                </Badge>
            </Link>
          </Box>
         
         {user.username?
         <Box>
         <Tooltip title={user.username}>
              <IconButton onClick={()=> navigate('/profile')}  sx={{ p: 0 }}>
                <Avatar alt={user.username[0]} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
         </Box>:null}
          {/* User Avatar Menu */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
