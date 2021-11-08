import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = ({ service }) => {
    const { name, description, img } = service;

    return (
        <div style={{padding: '70px 10px'}}>
            <CardMedia
                component="img"
                alt="Service Banner"
                style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                image={img}
            />
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, textAlign: 'center' }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{mb: 3}}>
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Service;