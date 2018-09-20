import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// Using the caracter "&&" to controle the priority: https://material-ui.com/guides/interoperability/#controlling-priority
const AppMenuButton = styled(IconButton)`
  && {
    margin-left: -12px;
    margin-right: 20px;
  }
`;

const HeaderTitle = styled(Typography)`
  flex-grow: 1;
`;

const Header = ({ userInfo }) => (
  <header className="pz-header">
    <AppBar position="static">
      <Toolbar>
        <AppMenuButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </AppMenuButton>
        <HeaderTitle
          variant="title"
          color="inherit"
          className="pz-header-title"
        >
          Pegazus - React application
        </HeaderTitle>
        <div>
          <span className="pz-header-user-info">{userInfo.name}</span>
          <IconButton
            aria-owns="menu-appbar"
            aria-haspopup="true"
            onClick={() => {}} // *** Behaviours ***
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
  }).isRequired,
};

export default Header;
