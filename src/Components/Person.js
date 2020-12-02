import React from 'react';

class Person extends React.Component{
    render(props){
        return(
            <p>My Name is {this.props.name} & I'm {this.props.age} years old <br/>
               {this.props.children}
            </p>
        );
    }
}

export default Person;