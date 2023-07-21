import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import { IoCreateOutline } from 'react-icons/io5'
// import { iconName } from 'react-icons/';

// functionality: displays new and existing documents/rows in our React log page
// data is added to collection based on schema; it's retrieved when we navigate back to log page.

export const CreatePage = () => {
    // test values: Loving Kindness Meditation, 15, Sharon Salzberg, Compassion
// form requesting info on; setting default values here
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [guide, setGuide] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    
    const redirect = useNavigate(); // to return to /zen page automatically

    const addMeditation = async () => {
        const newMeditation = { title, duration, guide, category, date }; // collecting values
        const response = await fetch('/meditations', {
            method: 'post',
            body: JSON.stringify(newMeditation),
            headers: {
                'Content-Type': 'application/json',
            },
        }); // sent post method with body being a string, mime content type header
        if(response.status === 201){ // created
            alert(`Your ZenDiary moment has been added! Thank you for meditating!`);
            redirect("/zen"); // returns to ZenDiary instead of HomePage
        } else {
            alert(`ZenDiary moment hasn't been saved. Status code = ${response.status}`);
            redirect("/zen"); // returns to Zen page to view
        }
    };


    return (
        <>
        <article id='introduction'>
            <h2>Add to the ZenDiary collection</h2>
            <p className='staff-pb'>Here is a way to keep track of your Zen moments.</p> 
            <p className='staff-pb'>Hopefully, it's also a way to encourage you to keep finding your peaceful moments in your day.</p>

                {/* // update state variable with Table form, LogRow */}
                <table id="zenTableAdd">
                    <caption className="zen">What a wonderful way to add some Zen right now!</caption>
                    <thead id="zenHead">
                        {/* <tr>
                            {/* icon to create a document/row }
                            <th colSpan="7">Record your Zen moment by clicking on:  <a href='zen-add'> <i className="fa-lg"> <IoCreateOutline /></i></a>
                            </th>
                        </tr> */}
                        <tr>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Guide</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th className="zenSave">Action</th>
                            {/* <th> <a href='zen-add'> <i> <IoCreateOutline /></i></a></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label for="title" className=" zen required">
                                <input
                                    type="text"
                                    placeholder="Meditation Track"
                                    value={title}
                                    name="title"
                                    id="title"
                                    onChange={e => setTitle(e.target.value)} required 
                                     /> 
                                </label> 
                            </td>

                            <td>
                                <label for="duration" className='zen required'>
                                <input
                                    type="number"
                                    value={duration}
                                    placeholder="0"
                                    name='duration'
                                    id="duration"
                                    onChange={e => setDuration(e.target.value)}
                                     />
                                </label>
                            </td>

                            <td>
                                <label for="guide" className='zen required'>
                                <input
                                    type="text"
                                    placeholder="Guide coach"
                                    value={guide}
                                    id="guide"
                                    name="guide"
                                    onChange={e => setGuide(e.target.value)}
                                    />
                                </label>
                            </td>

                            <td>
                                <label for="category" className='zen required'>
                                <input
                                    type="text"
                                    placeholder="Topic category"
                                    name='category'
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    id="category" 
                                    />
                                </label>
                            </td>

                            <td>
                                <label for="date" className='zen required'>
                                <input
                                    type="date"
                                    placeholder="Guide coach"
                                    value={date}
                                    id="date"
                                    name="date"
                                    onChange={e => setDate(e.target.value)}
                                    pattern="\d{2}-\d{2}-\d{2}"
                                    />
                                </label>
                            </td>

                            <td>
                                <button
                                    className="zenButton"
                                    onClick={addMeditation}
                                    // id="submit"
                                >Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default CreatePage;