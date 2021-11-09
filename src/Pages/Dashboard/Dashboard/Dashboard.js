import * as React from 'react';
import PropTypes from 'prop-types';
import { List, Typography, Toolbar, IconButton, Drawer, CssBaseline, Box, AppBar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Patients from '../Patients/Patients';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: '#13C2BC', color: 'white', height: '100%' }}>
            <Toolbar />
            <List>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <img src={user.photoURL} alt="Avatar" className="avatar" />
                </Box>
                <Link to={`${url}`} style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', fontSize: 16 }}>Dashboard</Button>
                </Link>
                <Link to="/appointment" style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', my: 1, fontSize: 16 }}>Appointments</Button>
                </Link>
                {admin && <Box>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}>
                        <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', fontSize: 16 }}>Make Admin</Button>
                    </Link>
                    <Link to={`${url}/addDoctor`} style={{ textDecoration: 'none', my: 1 }}>
                        <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', fontSize: 16, my: 1 }}>Add Doctor</Button>
                    </Link>
                    <Link to={`${url}/patients`} style={{ textDecoration: 'none' }}>
                        <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', fontSize: 16 }}>Patients</Button>
                    </Link>
                </Box>}
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', my: 1, fontSize: 16 }}>Prescriptions</Button>
                </Link>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', fontSize: 16 }}>Settings</Button>
                </Link>
            </List>

            <Button sx={{ mt: 6, width: '100%', color: 'white', fontWeight: 'bold', fontSize: 15 }} onClick={logOut}><LogoutIcon sx={{ mr: 2 }} />Log Out</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    boxShadow: 0,
                }}
            >
                <Toolbar sx={{ bgcolor: 'white', color: 'black' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                        Appointments - {user.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute>
                    <AdminRoute path={`${path}/patients`}>
                        <Patients></Patients>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;