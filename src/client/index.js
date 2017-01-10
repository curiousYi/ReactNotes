import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LoginForm from './components/loginForm';
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
            // image: faker.image.avatar(),   //will automatically generate fake images for now
            age: "",
            address: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(eventId, eventValue) {
        let obj = {};
        obj[eventId] = eventValue;
        this.setState(obj);
      }

      handleSubmit(event) {
        event.preventDefault();  //prevents the form from reloading after hitting the submit button
        //use axios or something later on
        console.log('we are submitting!');

        // fetch('http://localhost:3000/login', {
        //     method: 'POST',
        //     body: this.state
        // }).then(function(response) {
        //     console.log('We got a response');
        //     console.log(response);
        // }).catch(function(err) {
        //     console.log("uh oh we fucked up")
        // });
        axios({
          method: 'post',
          url: '/login',
          data: this.state
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        // let data = {
        //       method: 'POST',
        //       credentials: 'same-origin',
        //       mode: 'same-origin',
        //       body: JSON.stringify(this.state),
        //       headers: {
        //         'Accept':       'application/json',
        //         'Content-Type': 'application/json',
        //       }
        // }

        // fetch('http://localhost:3000/login', data)
        //         .then(response => response.json())  // promise
        //         .then(json => dispatch(receiveAppos(json)))

      }

    render (){
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
}

ReactDOM.render(<App />, document.getElementById('root'));


