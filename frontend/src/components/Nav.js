// global navigation for site/app
import React from 'react';
import { Link } from 'react-router-dom';
// import any {icons} from 'react-icons/';

function Nav(){
{/* if using icons, insert after to field: <i><iconName/></i> */}
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/zen">ZenDiary</Link>
            <Link to="../topics">Topics</Link>
            <Link to="../gallery">Gallery</Link>
            <Link to="../staff">Staff</Link>
            <Link to="../order">Order</Link>
            <Link to="../contact">Contact</Link>
        </nav>
    );// paths here refer to pages
}

export default Nav;
