import {Link }from 'react-router-dom';

const Product = () => {

    return (
       <section>
           Products:
           <ul>
               <li>
                   <Link to='Product/p1'> A book</Link>
               </li>
               <li>
                   <Link to='Product/p2'> Horror Movie</Link>
               </li>
               <li>
                   <Link to='Product/p3'> Cosmatic</Link>
               </li>
           </ul>
       </section>
    )
}

export default Product;