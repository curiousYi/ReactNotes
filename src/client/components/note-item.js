import React from 'react';
import Faker from 'faker';

// const NoteItem = ({note, onNoteSelect }) => {

const NoteItem = ({note}) => {
    // const imgUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="collection-item avatar">
          <img src={Faker.image.avatar()} alt="" className="circle"/>
          <span className="title">Yi Chao</span>
          <p>{Faker.lorem.sentence()}
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
    )
}

export default NoteItem
