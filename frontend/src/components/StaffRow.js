// this is the details/creation of first row which will then get replicated using map()

import React from "react";

function StaffRow({anEmployee}) {

    return(
            <tr>
            <td>
                <img src={anEmployee.picture.thumbnail} alt="Staff"/>
            </td>

            <td>
                <a href={"mailto:" + anEmployee.email}>
                {anEmployee.name.first}&nbsp;
                {anEmployee.name.last}</a>
            </td>

            <td>{anEmployee.dob.age}</td>

            <td>{anEmployee.phone}</td>

            <td>{anEmployee.location.city}</td>
            <td>{anEmployee.location.country}</td>

            </tr>
     )

}

export default StaffRow;
