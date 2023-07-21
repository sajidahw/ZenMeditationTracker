import React from "react";
import ProductQuantity from "./ProductQuantity.js";

// passed parameter make sure it matches in OrderPage's ProductRow call
function ProductRow({argProduct}){
    return(
        <tr>
            <td>{argProduct.product}</td>
            <td>{argProduct.company}</td>
            <td>{argProduct.price.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:2, maximumFractionDigits:6})}</td>
            <td><ProductQuantity/></td>
        </tr>
    );
}

export default ProductRow;
