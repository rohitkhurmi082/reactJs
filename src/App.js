import React from 'react';
import ReactDOM from 'react-dom';

//css
import './App.css';

//importing Components
import Welcome from './Components/Welcome';
import Person from './Components/Person';

//---------ClassBased Component-------

//React ->Create the Component
class App extends React.Component{
    render(){
        return(
            <div>
                <h3>App Component</h3>
                <Welcome/>
                <Person name="Bunny" age="14">My Hobbies: Sleeping</Person>
                <Person name="Snowy" age="10">My Hobbies: Cricket</Person>
                <Person name="Unicon" age="2">My Hobbies: Travelling</Person>
            </div>
        );
    }
}

//ReactDOM ->visualize the Components on the DOM
ReactDOM.render(<App/>, document.getElementById(('App')));
