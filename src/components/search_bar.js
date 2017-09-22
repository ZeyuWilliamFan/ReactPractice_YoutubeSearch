import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input /> //React.createElement
// }

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onMouseHover = this.onMouseHover.bind(this);
  }

  // Define method
  render() {
    return (
      <div className="search-bar">
        <input
          value =  {this.state.term}
          onChange={event => this.setState({ term: event.target.value })}/>
      </div>
    )
  }

  handleInputChange(event) {
    console.log(event.target.value);
  }

  onMouseHover(event) {
    this.setState({term: this.state.term+='!'});
  }
}

export default SearchBar;
