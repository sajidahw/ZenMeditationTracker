// this page enables increment/decrement of product quantities.

import React from "react"; //, {useState} 
import ProductRow from "../components/ProductRow.js";
// import products from "../data/products";
// import ProductQuantity from "../components/ProductQuantity.js";

function OrderPage({products}){

    return(
        <>
        <h2>Pet Products Order Form</h2>
            <article>
                <p className="order-p">
                    Hello, we're offering pet products for you to purchase through our affiliation with Pamela Van Londen.
                </p>
            </article>
            
                
            <article className="order purchase"> 
                {/* <!-- The legend element is used to describe the parent fieldset, and perhaps prompt the user.
                    Use one legend per fieldset. --> */}
                <h3 className="pets">Browse our Pet Supplies for Sale</h3>
                <table id="orderTable">
                    <caption className="order">Order a single product today:</caption>
                    <thead>
                        <tr>
                            <th>Product</th> 
                            <th>Company</th>
                            <th>Price</th>
                            <th>Quantity Chosen</th>
                        </tr>
                    </thead>

                    {/* pulling one row at a time from component ProductRow; blue word may come as the passed name from ProductRow */}
                    <tbody>
                        {/* {products.map((products, index) => <ProductRow product={chosenProduct} key={index}/>)} */}
                        {/* {console.log(chosenProduct)}; */}
                        {products.map((chosenProduct, index) => <ProductRow argProduct={chosenProduct} key={index}/>)}
                        {/* {console.log(products)}; */}
                    </tbody>

                    <tfoot>

                    </tfoot>
                </table>
                        
            </article>
        </>
    );
}

export default OrderPage;
