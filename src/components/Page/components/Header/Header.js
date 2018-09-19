import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ userInfo, classes, isOpen  = false, anchorEl }) => (
  <header className="pz-header">
    <AppBar position="static">
      <Toolbar>
        <IconButton className="pz-header-menu-button" color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className="pz-header-title">
          Pegazus - React application
        </Typography>
        <div>
          <span className="pz-header-user-info">{userInfo.name}</span>
          <IconButton
            aria-owns='menu-appbar'
            aria-haspopup="true"
            onClick={() => {}} // Behaviours
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  </header>
);

Header.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
};

export default Header;
