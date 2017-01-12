import React, {Component} from 'react';

class CreateNoteFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("here are the props in CreateNoteFooter", this.props )
    return (
      <div className="row">

          <form className="col s12"onSubmit={this.props.submitNewNote}>
                <div className="input-field col s10">
                  <input placeholder="Content" id="newPost" type="text" value={this.props.firstName}  onChange = {(event) => this.props.handleChange(event.target.id, event.target.value)} />
                </div>

                <div className="input-field col s2">
                  <button className="btn waves-effect waves-light" type="submit" name="action">
                    <i className="material-icons right">SUBMIT</i>
                  </button>
                </div>

          </form>

      </div>
    );
  }
}

export default CreateNoteFooter
