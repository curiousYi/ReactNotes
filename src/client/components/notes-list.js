import React, {Component} from 'react';
import NoteItem from './note-item';
import axios from 'axios';

class notesList extends Component {
  constructor(props) {
    super(props);

    console.log('notesList is loading!');

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

    const noteItems = [1,2,3,4,5].map( (number) =>
      {
        return (
            <NoteItem
            // onVideoSelect = {props.onVideoSelect}
            key={number}
            note={ number }
            />
        )
    })
     // const noteItems = props.videos.map((video) =>
     //     {
     //        return (
     //            <noteItem
     //            onVideoSelect = {props.onVideoSelect}
     //            key={video.etag}
     //            video={ video }
     //            />
     //        )
     //  }) ;

     return (
        <ul className = "collection">
            {noteItems}
        </ul>
    );
  }
}

export default notesList



