import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
// import { IoCreateOutline } from 'react-icons/io5'

//passed meditation is meditationToEdit
export const EditPage = ({ meditationToEdit }) => {
 // appears when first rendered or when value is changed; meditationToEdit
    const [title, setTitle]       = useState(meditationToEdit.title);
    const [duration, setDuration]     = useState(meditationToEdit.duration);
    const [guide, setGuide]       = useState(meditationToEdit.guide);
    const [category, setCategory] = useState(meditationToEdit.category);
    const [date, setDate]         = useState(meditationToEdit.date.slice(0, 10));
    
    const redirect = useNavigate(); // automatically go to page

    const editMeditation = async () => {
        const response = await fetch(`/meditations/${meditationToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title,
                duration: duration, 
                guide: guide, 
                category: category,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`With great ease, your ZenDiary moment's changes have been saved.`);// Successfully edited the meditation
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit ZenDiary document; status ${response.status}. ${errMessage.Error}`);// Failed to edit movie
        }
        redirect("/zen"); // returns to Zen page to view
    }

    return (
        <>
        <article id='introduction'>
            <h2>Edit a meditation in the collection</h2>
            <p className='staff-pb'>Edit your Zen moments by using the icons to update your progress on a row.</p>

            <table id="zenTable">
                <caption id="zen">EDIT your previous meditation moments from below.</caption>
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
                        <th className='zenSave'>Action</th>
                        {/* <th> <a href='zen-add'> <i> <IoCreateOutline /></i></a></th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {/* Meditation title, Time duration, Guide, Category, Date */}
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
                                    placeholder="01/01/2023"
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
                            className='zenButton'
                                onClick={editMeditation}
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
export default EditPage;