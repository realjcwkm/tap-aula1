import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Drawer,
} from "@mui/material";
import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

const ItemStyled = (props) => (
  <Typography
    {...props}
    component={Link}
    sx={{ color: "white", display: { xs: "none", sm: "block" } }}
  />
);

const headerOptions = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Clientes',
        href: '/clientes'
    },
    {
        label: 'Vendedores',
        href: '/vendedores'
    },
    {
        label: 'Produtos',
        href: '/produtos'
    },
    {
        label: 'Vendas',
        href: '/vendas'
    }
]

const profileOptions = [
    {
        label: 'Profile',
        href: '/profile/edit'
    },
    {
        label: 'My account',
        href: '/account'
    },
    {
        label: 'Logout',
        href: '/logout'
    },
]

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <Box>
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Toolbar sx={{ gap: 4 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
              onClick={handleClickDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={openDrawer} onClose={handleCloseDrawer}>
              {<MenuItem>Profile</MenuItem>}
            </Drawer>
            { headerOptions.map( (entry) => {
                return <ItemStyled href={entry.href}>{entry.label}</ItemStyled>
            }) }

            
          </Toolbar>
          <Button
            startIcon={<Avatar alt="Remy Sharp" src="vite.svg" />}
            sx={{ color: "white" }}
            onClick={handleClick}
          >
            Jean Carlo
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            { profileOptions.map((entry) => {
                return <MenuItem>{entry.label}</MenuItem>
            }) }
            
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header;
