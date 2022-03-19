import {useParams } from 'react-router-dom';

const ProductDetails = ()=>{

    const param = useParams();
    console.log(param.productId);
        return (
        <div>
            <h2>here are Product Details  {param.productId}</h2>
           
        </div>
    )
}

export default ProductDetails;
