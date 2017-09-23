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
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    )
  }



  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  onMouseHover(event) {
    this.setState({term: this.state.term+='!'});
  }
}

export default SearchBar;
