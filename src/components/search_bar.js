import React, { Component } from 'react'; //import react and get the property called "Component" and call it Component

//this is a functional component.
// const SearchBar = () => {
//   return <input />; //returns an input field.
// };


//this is a class-based component. It has ability to be more "aware"

class SearchBar extends Component { // define a new class called SearchBar and inherit from React Component
  constructor(props) { //constructor is called automatically when it's instantiated.
    super(props); //access Component

    this.state = { term: ''}; //we'll capture our input here in term (Search term)
  }


  render() {
    return(
        <div>
        <input
          value={this.state.term}
          onChange={event => this.setState( {term: event.target.value})} />
        </div>
      ); //input field is a controlled input. when the state changes, the input field changes.
    }
}
export default SearchBar;
