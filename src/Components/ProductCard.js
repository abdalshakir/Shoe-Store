import React from 'react';
import { Card, CardMedia, CardContent, Box, Typography, IconButton, Container, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ProductCard() {
    const shoes = [
        {
            name: 'Air Jordan 6 Retro',
            img: "https://cutt.ly/vKYIzEU",
            price: "$200"
        },
        {
            name: "Air Jordan 1 Mid",
            img: "https://cutt.ly/9KYIAOB",
            price: "$120"
        },
        {
            name: "Air Jordan XXXVI GC PF",
            img: "https://cutt.ly/EKYI4PF",
            price: "$195"
        },
        {
            name: "Air Jordan 1 Mid SE",
            img: "https://cutt.ly/3KYOfHW",
            price: "$135"
        },
        {
            name: "Air Jordan XXXVI 'Taco Jay",
            img: "https://cutt.ly/2KYOWXd",
            price: "$195"
        },
        {
            name: "Jordan Air 200E",
            img: "https://cutt.ly/xKYOLx1",
            price: "$125"
        },
        {
            name: "Jordan Zoom Separate",
            img: "https://cutt.ly/DKYO5dL",
            price: "$88"
        },
        {
            name: "Jordan Series 'Taco Jay' PE",
            img: "https://cutt.ly/pKYPiJJ",
            price: "$80"
        }
    ]
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    {shoes.map((shoes, index) => {
                        return (
                            <Grid item xs={3}>
                                <Card key={index} sx={{ maxWidth: 280, '&:hover': { boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' } }}>
                                    <CardMedia
                                        component="img"
                                        image={shoes.img}
                                        height="220"
                                    />
                                    <CardContent>
                                        <Box>
                                            <Box sx={{ paddingBottom: '15px' }}>
                                                <Typography variant='subtitle2'>
                                                    {shoes.name}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                                                    {shoes.price}
                                                </Typography>
                                                <IconButton color="primary" aria-label="add to shopping cart">
                                                    <AddShoppingCartIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default ProductCard