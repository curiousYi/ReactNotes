import React, {Component} from 'react';

class notesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('here are my cookies', document.cookie)
    console.log("here are the props ", this.props )
    const buttonStyle = {
        width: '200px',
        height: '200px',
        margin: 'auto',
        padding:'0%',
        position: 'relative'
    }
    return (
      <div className="row">
          <div> not loggedin
          </div>
      </div>
    );
  }
}

export default notesList
