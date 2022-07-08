import React from 'react';
import { Card, CardMedia, CardContent, Box, Typography, IconButton, Container, Grid } from '@mui/material';
import { shoes } from '../Assets/AllProductsData'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

function ProductCard() {

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    {Object.entries(shoes).map(([slug, { name, img, price }]) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} key={slug}>
                                <Link to={`/products/${slug}`} style={{ textDecoration: 'none' }}>
                                    <Card sx={{ maxWidth: 280, margin: 'auto', '&:hover': { boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' } }}>
                                        <CardMedia
                                            component="img"
                                            image={img}
                                            height="220"
                                        />
                                        <CardContent>
                                            <Box>
                                                <Box sx={{ paddingBottom: '15px' }}>
                                                    <Typography variant='subtitle2'>
                                                        {name}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                                    <Typography variant='h6' sx={{ fontWeight: 600 }}>
                                                        {price}
                                                    </Typography>
                                                    <IconButton color="primary" aria-label="add to shopping cart">
                                                        <AddShoppingCartIcon />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default ProductCard