import React, {Component} from 'react';
import NoteItem from './note-item';
import axios from 'axios';

class notesList extends Component {
  constructor(props) {
    super(props);

    console.log('notesList is loading!');
    console.log(this.props)
    // axios({
    //   method: 'get',
    //   url: '/notes'
    // }).then(function (response) {
    //     //we do not directly mutate the state because that's bad in react :/
    //     // console.log('we got a response back');
    //     // console.log(response)
    //     this.setState({loggedIn: response.data.loggedIn, userID: response.data.userID})
    //     // console.log('state before setting state')
    //     // console.log(this.state)
    //   }.bind(this))   //trying to resolve this issue
  }

  render() {
    const notesByTime = this.props.notesByTime;

    const noteItems = notesByTime.map( (note, index) =>
      {
        console.log('heres index', index)
        return (
            <NoteItem
            // onVideoSelect = {props.onVideoSelect}
            key={index}
            note={note}
            />
        )
    })

     return (
        <ul className = "collection">
            {noteItems}
        </ul>
    );
  }
}

export default notesList



