import React from 'react';
import { shoes } from '../Assets/AllProductsData';
import { useParams } from 'react-router-dom';

function ProductLaunch() {
    const { slug } = useParams();
    const shoe = shoes[slug];
    if (!shoe) {
        return <h2>Not Found!</h2>
    }
    const { name, img } = shoe;
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} />
        </div>
    )
}

export default ProductLaunch