import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { IoCreateOutline } from 'react-icons/io5'
import LogTable from '../components/LogTable';


// functionalitiy: retrieve ALL documents/rows from collection to display in a table
// table includes icons to create, edit, and delete documents/rows.

function LogPage({ setMeditation }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [meditations, setMeditations] = useState([]);

    // RETRIEVE the entire list of meditations; default is get
    const loadmeditations = async () => {
        const response = await fetch('/meditations');
        const meditations = await response.json();
        setMeditations(meditations);
    } 
    

    // UPDATE a single meditation
    const onEditmeditation = async meditation => {
        setMeditation(meditation);
        redirect("/update");
    }


    // DELETE a single meditation  
    const onDeletemeditation = async _id => {
        const response = await fetch(`/meditations/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {//successful
            const getResponse = await fetch('/meditations');
            const meditations = await getResponse.json();
            setMeditations(meditations); //setMeditations(meditations.filter(m => m._id !== _id));
        } else {
            console.error(`Failed to delete meditation with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the meditations; used when component is mounted or updated with a value (changed)
    useEffect(() => {
        loadmeditations();
    }, []);

    // DISPLAY the meditations; tempB property from LogTable.js
    return (
        <>
            <h2>Meditation Log of your Zen Moments</h2>
            <p className='home'>Here is a way to keep track of your Zen moments. Hopefully, it's also a way to encourage you to keep finding your peaceful moments in your day.</p>
            <LogTable
                pluralMeditations={meditations} 
                onEdit={onEditmeditation} 
                onDelete={onDeletemeditation} 
            />
            
        </>
    );
}

export default LogPage;