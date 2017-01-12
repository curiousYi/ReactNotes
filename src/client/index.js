import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LoginForm from './components/loginForm';
import NotesList from './components/notes-list';
import CreateNoteFooter from './components/CreateNoteFooter';
import axios from 'axios'

// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import reducers from './reducers';
// import Routes from './router';
// import '../style/materialize.css';
// import '../style/react-range.css';
// import '../style/style.css';

class App extends Component {
    constructor(args){
        super(args);
        this.state = {
            firstName: "",
            lastName: "",
            imgUrl:"",
            age: "",
            address: "",
            loggedIn: false,
            userID: "",
            newPost: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentWillMount() {
        //using this so that it skips the loggedIn page
        axios({
          method: 'get',
          url: '/login',
          }).then(function (response) {
            console.log('heeeeeey');
            console.log(response);
            if(response.data.loggedIn){
                this.setState({loggedIn: response.data.loggedIn})
            }
          }.bind(this))   //trying to resolve this issue
      }


      handleChange(eventId, eventValue) {
        console.log('OVER HERE IN RIVER CITY ', eventId);
        console.log('EMPIRE STRIKES BACK ', eventValue);
        console.log('heres the state', this.state);
        let obj = {};
        obj[eventId] = eventValue;
        this.setState(obj);
      }


      handleSubmit(event) {
        event.preventDefault();  //prevents the form from reloading after hitting the submit button
        //use axios or something later on
        console.log('we are submitting!');
        let loginObj = this.makeLoginObj();
        //to do figure this out

        axios({
          method: 'post',
          url: '/login',
          data: loginObj
          }).then(function (response) {
            //we do not directly mutate the state because that's bad in react :/
            // console.log('we got a response back');
            // console.log(response)
            this.setState({loggedIn: response.data.loggedIn, userID: response.data.userID})
            // console.log('state before setting state')
            // console.log(this.state)
          }.bind(this))   //trying to resolve this issue

      }

      makeLoginObj(){
          let obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            address: this.state.address
          };
          return obj
      }

    render (){

        if(!this.state.loggedIn){
            return (
                    <div>
                        <Header />
                        <LoginForm
                            handleSubmit = {this.handleSubmit}
                            firstName = {this.state.firstName}
                            lastName = {this.state.lastName}
                            age = {this.state.age}
                            address = {this.state.address}
                            handleChange = {this.handleChange}
                        />
                    </div>
                    //use collections from materialize

            );
        }
        else{
            return (
                <div>
                        <Header />
                        <NotesList
                            handleSubmit = {this.handleSubmit}
                            firstName = {this.state.firstName}
                            lastName = {this.state.lastName}
                            age = {this.state.age}
                            address = {this.state.address}
                            handleChange = {this.handleChange}
                        />
                        <CreateNoteFooter
                            handleChange = {this.handleChange}
                        />
            </div>

            )
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


