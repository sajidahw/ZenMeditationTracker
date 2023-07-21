import React, {useState} from "react";
import StaffRow from "../components/StaffRow.js";


function StaffPage(employees) {

    const [resultsStaff, setStaff] = useState([]);

    //Fetches 10 rows of staff members
    const fetchStaff = () => {

        fetch("https://randomuser.me/api/?results=10")

        //if API is working?, send promise via JSON; HAS to be 'response, results' bc that's the structure names it recognizes
            .then((response) => response.json())
            // getting promise for the actual results
            .then((response) => {//works with results NOT resultsStaff
                setStaff(response.results);
                // console.log(response.results);
                // console.log(response);
            })

            // for errors reporting
            .catch(() => {
                alert("Oopsies, seems like the server for API site Random User Generator isn't accessible right now.");
            });
    };

    return (
        <>
        <h2>Staff Directory</h2>
            <article className="staff">
                <p className="staff-p"> Our distinctive employees take great pride in being able to serve you.</p>
                <p className="staff-p">  Access an employee's details by clicking on the website link: <a href="https://randomuser.me/" target="_blank" rel="noreferrer"> Staff Details</a></p>

                <p className="staff-pb">
                    <button id="listeningServer" onClick={fetchStaff} className="staff" value="generate">Generate</button> our batches of 10 employees at a time to recognize your favorite employee.
                </p>

                {/* <h3>Our Employees:</h3> */}
                    <table id="staffTable">
                        <caption id="staff">Current Employees Listing</caption>
                        <thead id="staffHead">
                            <tr className="staffCol">
                                <th className="staffH">Portrait</th>
                                <th className="staffH">Name &amp; Email</th>
                                <th className="staffH">Age</th>
                                <th className="staffH">Telephone</th>
                                <th className="staffH">City</th>
                                <th className="staffH">Country</th>
                            </tr>
                        </thead>
                        <tbody id="staffTableGenerator">
                            {/* generating employees into array; matching StaffRow's arg with map's passed param */}
                            {resultsStaff.map((employee, index) => <StaffRow anEmployee={employee} key={index} />)}
                            
                        </tbody>
                    </table>
            </article>
        </>
    );
}

export default StaffPage;
