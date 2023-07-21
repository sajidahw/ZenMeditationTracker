import React from 'react';
import LogRow from './LogRow';//LogRows id, map?!
import { IoCreateOutline } from 'react-icons/io5'

//parameters inserted in functions need to be consistent names
function LogTable({ pluralMeditations, onDelete, onEdit }) {
    return (
        <article className='zenArticle'>
            <table id="zenTable">
                <caption className="zen">Bask in your Meditation Moments!</caption>
                <thead id="zenHead">
                    <tr>
                        {/* icon to create a document/row */}
                        <th colSpan="7">Record your Zen moment by clicking on  <a href='zen-add'> <i className="fa-lg"> <IoCreateOutline /></i></a> to ADD a new meditation.
                        </th>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <th>Duration</th>
                        <th>Guide</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        {/* <th> <a href='zen-add'> <i> <IoCreateOutline /></i></a></th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* map references a component for one row/document of collection/table; properties in blue; can be all meditation instead of tempMeditation */}
                    {pluralMeditations.map((tempMeditation, i) => 
                        <LogRow 
                            meditation={tempMeditation} 
                            key={i}
                            onDelete={onDelete}
                            onEdit={onEdit} 
                        />)}
                </tbody>
            </table>
        </article>
    );// from LogPage.js for lines 23-26; properties are Lefthand variable assigned to RH value
}

export default LogTable;
