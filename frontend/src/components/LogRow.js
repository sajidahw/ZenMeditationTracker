import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';//icon driven for edit, delete


//function LogRow({zen, onEdit, onDelete})?
function LogRow({ meditation, onEdit, onDelete }) {
    return (
        
        <tr>
            <td title='Name of your meditation track'>{meditation.title}</td>
            <td title='Meditation length in mins'>{meditation.duration}</td>
            <td title='Guide/Coach you meditated with?'>{meditation.guide}</td>
            <td title='Which meditation category type did you choose?'>{meditation.category}</td>
            <td title='When did you meditate?'>{meditation.date.slice(0, 10)}</td>
            <td><i className="fa-lg"><MdDeleteForever onClick={() => onDelete(meditation._id)} title="Click to delete"/></i></td>
            <td><i className="fa-lg"><MdEdit onClick={() => onEdit(meditation)} /></i></td>
        </tr>
    );
}

export default LogRow;
