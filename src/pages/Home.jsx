import { AppBar, Box, Toolbar, Typography, Link, IconButton } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuItem from '../components/MenuItem'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const ItemStyled = (props) => <Typography {...props} component={Link} sx={{ color: "white", display: {xs: "none", sm: "block"} }} />

function Home() {
  return (
    <div>
      <Box>
        <AppBar position='static'>
          <Toolbar sx={{gap: 4}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: {xs: "block", sm: "none"} }}
            >
              <MenuIcon />
            </IconButton>
            <ItemStyled href="/">Home</ItemStyled>
            <ItemStyled href="/photos">Fotos</ItemStyled>
            <ItemStyled href="/gallery">Galeria</ItemStyled>
            <ItemStyled href="/contact">Contato</ItemStyled>
            {/* <MenuItem title='Home' href="/" />
            <MenuItem title='Fotos' href="/photos" />
            <MenuItem title='Galeria' href="/gallery" />
            <MenuItem title='Contatos' href="/contact" /> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </div>
  )
}

export default Home