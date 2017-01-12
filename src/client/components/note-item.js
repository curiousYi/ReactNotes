import React from 'react';
import Faker from 'faker';

// const NoteItem = ({note, onNoteSelect }) => {

const NoteItem = ({note}) => {
    // const imgUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="collection-item avatar">
          <img src={note.imageUrl} alt="" className="circle"/>
          <span className="title">{note.firstName} {note.lastName}</span>
          <p>{note.note}
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
    )
}

export default NoteItem
