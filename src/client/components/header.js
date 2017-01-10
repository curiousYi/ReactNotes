import React, {Component} from 'react';


//functional component in react since it doesn't need awareness of state
class header extends Component {
  render (){
    return <h1 className="brand-logo center"> Welcome to ReactNotes </h1>
  }
}

export default header;
