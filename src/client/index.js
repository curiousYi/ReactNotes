import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
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
    }

    render (){
        return (
                <Header/>
                    <div>
                    </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


