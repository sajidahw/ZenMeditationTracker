// component file which will use React icons and will import into the ProductRow.js file
// function will increment and decrement setQuantity above 0 and 10 or below.
// this is the details/creation of first row which will then get replicated using map()

import React, { useState } from "react";
import {BsFillCaretUpFill, BsFillCaretDownFill} from 'react-icons/bs';// icons used

function ProductQuantity(){
    const [itemQuantity, setItemQuantity] = useState(0); // first row initialization

    const incrementItem = () => setItemQuantity(itemQuantity === 10 ? itemQuantity : itemQuantity + 1);
    const decrementItem = () => setItemQuantity(itemQuantity === 0 ? 0 : itemQuantity - 1);

    return(
        <div className="">
            <BsFillCaretUpFill onClick={incrementItem} className=""/>
            <span className="markerSpace">{itemQuantity}</span>
            <BsFillCaretDownFill onClick={decrementItem} className=""/>
        </div>
    );
}

export default ProductQuantity;
