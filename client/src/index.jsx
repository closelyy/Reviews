import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import ReviewList from './components/ReviewList.jsx';
import styled from 'styled-components'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.onVoteClick = this.onVoteClick.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
  }

  componentDidMount() {
    fetch('/api/reviews/39')
      .then((response) => {
        const res = response.json();
        return res;
      })
      .then((reviews) => {
        console.log(reviews.length);
        this.setState({ reviews });
      });
  }

  onVoteClick(e) {
    const info = {};
    info.reviewId = e.target.getAttribute('reviewId');
    [, info.voteType] = e.target.getAttribute('class').split(' ');
    $.post('/api/reviews/vote', { info }, this.updateVotes.bind(this));
  }

  searchQuery(e) {
    console.log(`search parameters: `, e);

  }

  updateVotes(voteInfo) {
    if (voteInfo.msg === 'Success') {
      this.setState((state) => {
        const reviews = state.reviews.map((review) => {
          if (review.ID === voteInfo.reviewId) {
            const updatedReview = review;
            updatedReview[voteInfo.voteType.toUpperCase()] += 1;
            return updatedReview;
          }
          return review;
        });
        return reviews;
      });
    }
  }

  render() {
    const reviews = this.state.reviews;
    return (
      <div>
        <Search search={this.searchQuery} />
        <ReviewList voteClick={this.onVoteClick} reviews={reviews} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
