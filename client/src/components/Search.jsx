import React from 'react';
import styled from '@emotion/styled';


const SortOptions = styled.div`
  display: flex;
  text-align:right;
  margin:0px auto 0px auto;
`;
SortOptions.displayName = 'SortOptions';

const SearchContainer = styled.div`
  display: flex;
  max-width: 700px;
`;
SearchContainer.displayName = 'SearchContainer';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      sortOption: 0
    };
    this.executeSearch = this.executeSearch.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  onSearchChange(e) {
    this.setState({
      searchQuery: e.target.value,
    });
  }

  executeSearch() {
    this.props.search(this.state);
  }

  onSortChange(e) {
    this.setState({
      sortOption: e.target.value,
    });
    setTimeout(this.executeSearch, 0);
  }

  render() {

    let sortOptions = ['Highest Rating', 'Lowest Rating', 'Newest', 'Oldest', 'Coolest', 'Funniest', 'Most Useful']

    sortOptions = sortOptions.map((option, idx) => {
      return (
        <option value={idx}>{option}</option>
      );
    });

    return (
      <SearchContainer>
        <button type="submit" onClick={this.executeSearch}>Search</button>
        <input type="text" onChange={this.onSearchChange} value={this.state.searchQuery} />
        <SortOptions>
          <div>Sort By: </div>
          <select id="sortSelect" 
                  onChange={this.onSortChange} 
                  value={this.props.sortOption}>
          {sortOptions}
          </select>
        </SortOptions>
      </SearchContainer>
    );
  }

};
export default Search;
