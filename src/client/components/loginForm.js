import React, {Component} from 'react';

class loginForm extends React.Component {
  constructor(props) {
    super(props);

    this.submitLogin = this.submitLogin.bind(this);

  }

  submitLogin(event) {
    alert('Something was submitted ' + this.state.value);
    event.preventDefault();
  }


  render() {

//event.target.id
//event

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

          <form className="col s12"onSubmit={this.props.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="First Name" id="firstName" type="text" value={this.props.firstName}  onChange = {(event) => this.props.handleChange(event.target.id, event.target.value)} />
                </div>
              </div>


              <div className="row">
                 <div className="input-field col s12">
                  <input placeholder="Last Name" id="lastName" type="text" value={this.props.lastName} onChange = {(event) => this.props.handleChange(event.target.id, event.target.value)} />
                </div>
              </div>


              <div className="row">
                 <div className="input-field col s12">
                  <input placeholder="Age" id="age" type="text" value={this.props.age} onChange = {(event) => this.props.handleChange(event.target.id, event.target.value)} />
                </div>
              </div>


              <div className="row">
                 <div className="input-field col s12">
                  <input placeholder="Address" id="address" type="text" value={this.props.address} onChange = {(event) => this.props.handleChange(event.target.id, event.target.value)} />
                </div>
              </div>

            <div className="row" style={buttonStyle}>
                  <button className="btn waves-effect waves-light" type="submit" name="action">
                    <i className="material-icons right">Submit</i>
                  </button>
            </div>

          </form>

      </div>
    );
  }
}

export default loginForm