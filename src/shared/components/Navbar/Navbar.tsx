'use client';
// material icons
import {
  Brightness4,
  Brightness7,
  ExpandLess,
  ExpandMore,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Menu as MenuIcon,
} from '@mui/icons-material';
// material components
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Box,
  useTheme,
  useMediaQuery,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  ListItemButton,
  Switch,
  FormControlLabel,
} from '@mui/material';
// react imports
import { useThemeContext } from '~/shared/theme/context/ThemeContext';
import React, { useState } from 'react';

// types
import styles from './styles.module.scss';
import { NavbarItemProps } from './types';
// styles
// items object structure
const navItems: NavbarItemProps[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Servicios',
    children: [
      { label: 'Desarrollo Web', href: '/servicios/web' },
      { label: 'Apps Móviles', href: '/servicios/movil' },
    ],
  },
  {
    label: 'Proyectos',
    children: [
      { label: 'Open Source', href: '/proyectos/open-source' },
      { label: 'Clientes', href: '/proyectos/clientes' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];
// main component
export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi App
        </Typography>

        {/* Switch para cambiar tema */}
        <FormControlLabel
          control={<Switch checked={mode === 'dark'} onChange={toggleTheme} color="default" />}
          label={
            mode === 'dark' ? (
              <Brightness7 className={styles['form-control__icon']} />
            ) : (
              <Brightness4 className={styles['form-control__icon']} />
            )
          }
          labelPlacement="start"
          sx={{ mr: 2 }}
        />

        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      </Toolbar>
    </AppBar>
  );
}

// mobile navbar component
const MobileNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openCollapse, setOpenCollapse] = useState<string | null>(null);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleCollapse = (label: string) => setOpenCollapse((prev) => (prev === label ? null : label));

  const handleNavClick = (href?: string) => {
    if (href) window.location.href = href;
  };
  return (
    <>
      <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => (item.children ? toggleCollapse(item.label) : handleNavClick(item.href))}>
                    <ListItemText primary={item.label} />
                    {item.children && (openCollapse === item.label ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>
                {item.children && (
                  <Collapse in={openCollapse === item.label} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((sub) => (
                        <ListItem disablePadding key={sub.label}>
                          <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavClick(sub.href)}>
                            <ListItemText primary={sub.label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

// desktop navbar
const DesktopNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>, label: string) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(label);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };
  const handleNavClick = (href?: string) => {
    if (href) window.location.href = href;
  };
  return (
    <>
      {navItems.map((item) =>
        item.children ? (
          <div key={item.label}>
            <Button
              color="inherit"
              onClick={(e) => handleMenuOpen(e, item.label)}
              sx={{ textTransform: 'none', display: 'flex', gap: 0.5 }}
            >
              {item.label}
              {openMenu === item.label ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={openMenu === item.label}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              {item.children.map((sub) => (
                <MenuItem key={sub.label} onClick={() => handleNavClick(sub.href)}>
                  {sub.label}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ) : (
          <Button key={item.label} color="inherit" onClick={() => handleNavClick(item.href)}>
            {item.label}
          </Button>
        )
      )}
    </>
  );
};
