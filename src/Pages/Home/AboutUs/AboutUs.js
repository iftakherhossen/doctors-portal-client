import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{ px: 10 }}>
                    <Grid item xs={12} md={5}>
                        <img src="https://i.ibb.co/g6Hjb6T/treatment.png" alt="dental" style={{ height: 450, paddingTop: 20, paddingBottom: 60, paddingLeft: 10 }} />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box sx={{ py: 8 }}>
                            <Typography variant="h4">Exceptional Dental Care, on Your Terms!</Typography>
                            <Typography variant="body-2" sx={{ my: 3, display: 'block' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed turpis id dolor blandit luctus quis eu nibh. Nam in ex nec massa accumsan varius ut ut tortor. Maecenas interdum lectus at odio ornare vulputate. Nullam venenatis quis risus vitae interdum. Aliquam vitae aliquam lorem. In imperdiet porta euismod. Proin a dolor nec ipsum iaculis efficitur. Sed aliquet mi id massa porta, eu vestibulum leo ullamcorper. Ut bibendum tellus tortor, ut faucibus elit accumsan quis. Donec vitae urna luctus, lacinia metus vel, accumsan nunc. Etiam nisl risus, imperdiet eu nisi laoreet, tristique rhoncus lorem. Aenean in fringilla elit. Vivamus posuere nunc nibh, nec rhoncus mauris euismod eu.</Typography>
                            <Button variant="contained" sx={{ mt: 1, bgcolor: '#13C2BC'}}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AboutUs;