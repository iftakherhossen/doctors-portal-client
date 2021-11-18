import { AppBar, Button, Divider, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useRouteMatch, Switch } from 'react-router-dom';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddDoctor from '../AddDoctor/AddDoctor';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageReviews from '../ManageReviews/ManageReviews';

const Settings = () => {
    let { path, url } = useRouteMatch();

    return (
        <Box>
            <Box sx={{ flexGrow: 1, mt: -3 }}>
                <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 0 }}>
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Settings
                        </Typography>
                        <Link to={`${url}`} style={{textDecoration: 'none', color: 'black'}}>
                            <Button color="inherit" sx={{ mx: 1, fontSize: 16, fontWeight: 'bold' }}>Make Admin</Button>
                        </Link>
                        <Link to={`${url}/addDoctor`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Button color="inherit" sx={{ mx: 1, fontSize: 16, fontWeight: 'bold' }}>Add Doctor</Button>
                        </Link>
                        <Link to={`${url}/manageReviews`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Button color="inherit" sx={{ mx: 1, fontSize: 16, fontWeight: 'bold' }}>Manage Reviews</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <Divider/>
            <Box>
                <Switch>
                    <AdminRoute exact path={path}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageReviews`}>
                        <ManageReviews />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
};

export default Settings;