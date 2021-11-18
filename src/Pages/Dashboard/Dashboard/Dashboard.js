import * as React from 'react';
import PropTypes from 'prop-types';
import { List, Typography, Toolbar, IconButton, Drawer, CssBaseline, Box, AppBar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Patients from '../Patients/Patients';
import AllAppointments from '../AllAppointments/AllAppointments';
import Payment from '../Payment/Payment';
import PostReviews from '../PostReviews/PostReviews';
import AppointmentList from '../AppointmentList/AppointmentList';
import Settings from '../Settings/Settings';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: '#13C2BC', color: 'white', height: '100%' }}>
            <List>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center',mt: 6, mb: 4 }}>
                    <img src={user.photoURL} alt="Avatar" className="avatar" />
                </Box>
                <Link to={`${url}`} style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', mb: 1, fontSize: 16 }}>Dashboard</Button>
                </Link>
                <Link to="/appointment" style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', mb: 1, fontSize: 16 }}>Appointments</Button>
                </Link>
                <Link to={`${url}/reviewUs`} style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', fontSize: 16, mb: 1 }}>Review Us</Button>
                </Link>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', mb: 1, fontSize: 16 }}>Prescriptions</Button>
                </Link>
                {admin && <Box>
                    <Link to={`${url}/patients`} style={{ textDecoration: 'none' }}>
                        <Button sx={{ width: '100%', color: 'white', mb: 1, fontWeight: 'bold', fontSize: 16 }}>Patients</Button>
                    </Link>
                    <Link to={`${url}/allAppointments`} style={{ textDecoration: 'none' }}>
                        <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', fontSize: 16, mb: 1 }}>All Appointments</Button>
                    </Link>
                    <Link to={`${url}/settings`} style={{ textDecoration: 'none' }}>
                        <Button sx={{ width: '100%', color: 'white', fontWeight: 'bold', mb: 1, fontSize: 16 }}>Settings</Button>
                    </Link>
                </Box>}
            </List>
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
                        Dashboard - {user.displayName}
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
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/payment/:appointmentId`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/reviewUs`}>
                        <PostReviews />
                    </Route>
                    <AdminRoute path={`${path}/patients`}>
                        <Patients />
                    </AdminRoute>
                    <AdminRoute path="/dashboard/patients/appointments/:email">
                        <AppointmentList />
                    </AdminRoute>
                    <AdminRoute path={`${path}/allAppointments`}>
                        <AllAppointments />
                    </AdminRoute>
                    <AdminRoute path={`${path}/settings`}>
                        <Settings />
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