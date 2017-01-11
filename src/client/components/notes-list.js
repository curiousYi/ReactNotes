import React, {Component} from 'react';
import noteItem from ('./note-item');
import axios from 'axios';

class notesList extends React.Component {
  constructor(props) {
    super(props);

    console.log('notesList is loading!');

    axios({
      method: 'get',
      url: '/notes'
    }).then(function (response) {
        //we do not directly mutate the state because that's bad in react :/
        // console.log('we got a response back');
        // console.log(response)
        this.setState({loggedIn: response.data.loggedIn, userID: response.data.userID})
        // console.log('state before setting state')
        // console.log(this.state)
      }.bind(this))   //trying to resolve this issue
  }

  render() {

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
        // <ul className = "col-md-4 list-group">
            // {noteItems}
        // </ul>
    );
  }
}

export default notesList



