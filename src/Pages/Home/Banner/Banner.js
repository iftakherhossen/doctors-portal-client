import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';

const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500
}

const homeBg = {
    background: 'url("https://i.ibb.co/MD0Xb6W/bg.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 800
}

const Banner = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, mt: -12, mb: 20, px: 'auto' }}>
                <Grid container spacing={2} sx={{ ...verticalAlign, py: 1, px: 'auto' }} style={homeBg}>
                    <Grid item xs={12} md={5} sx={{ textAlign: 'left', px: 'auto' }}>
                        <Box sx={{ width: 350, marginLeft: 'auto', marginRight: 'auto' }}>
                            <Typography variant="h4" sx={{ mt: 0, mb: 3 }}>
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="body-1" color="color.secondary" sx={{ display: 'block' }}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: '#15D1CD', mt: 4, fontWeight: 'bold' }}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img src="https://i.ibb.co/xsXWckW/chair.png" alt="chair" style={{ width: 480 }} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ px: 15, mt: -10 }}>
                    <Grid xs={12} md={6} lg={4} sx={{ px: 1 }}>
                        <Card sx={{ boxShadow: 0, backgroundColor: '#13c2bc', px: 2 }}>
                            <CardContent>
                                <Box sx={{ textAlign: 'center' }}>
                                    <AccessTimeIcon fontSize='large' sx={{ color: 'white', my: 1 }} />
                                    <Typography sx={{ display: 'block', fontSize: 19, color: 'white' }}>
                                        Opening Hours
                                    </Typography>
                                    <Typography sx={{ fontSize: 13, color: 'white' }}>
                                        Lorem ipsum dolar sit amet, dummy text.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={6} lg={4} sx={{ px: 1 }}>
                        <Card sx={{ boxShadow: 0, backgroundColor: '#374d61', px: 2 }}>
                            <CardContent>
                                <Box sx={{ textAlign: 'center' }}>
                                    <LocationOnIcon fontSize='large' sx={{ color: 'white', my: 1 }} />
                                    <Typography sx={{ display: 'block', fontSize: 19, color: 'white' }}>
                                        Visit Our Location
                                    </Typography>
                                    <Typography sx={{ fontSize: 13, color: 'white' }}>
                                        Mirpur -1, Dhaka, Bangladesh
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={6} lg={4} sx={{ px: 1 }}>
                        <Card sx={{ boxShadow: 0, backgroundColor: '#13c2bc', px: 2 }}>
                            <CardContent>
                                <Box sx={{textAlign: 'center'}}>
                                    <CallIcon fontSize="large" sx={{ color: 'white', my: 1 }} />
                                    <Typography sx={{ display: 'block', fontSize: 19, color: 'white' }}>
                                        Contact with us
                                    </Typography>
                                    <Typography sx={{ fontSize: 13, color: 'white' }}>
                                        +8801298563497
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Banner;