import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import ReviewList from './components/ReviewList.jsx';

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
    fetch('/api/reviews/40')
      .then((response) => {
        const res = response.json();
        return res;
      })
      .then((reviews) => {
        this.setState({ reviews });
      });
  }

  onVoteClick(e) {
    const info = {};
    info.reviewId = e.target.getAttribute('reviewId');
    [, info.voteType] = e.target.getAttribute('class').split(' ');
    console.log(`getting a request to vote for ${info}`);
    $.post('/api/reviews/vote', { info }, this.updateVotes.bind(this));
  }

  searchQuery(e) {
    console.log('search parameters: ', e);
  }

  updateVotes(voteInfo) {

    const newVoteInfo = JSON.parse(voteInfo);
    if (newVoteInfo.msg === 'Success') {
      this.setState((state) => {
        const reviews = state.reviews.map((review) => {
          if (review.ID === newVoteInfo.reviewId) {
            const updatedReview = review;
            updatedReview[newVoteInfo.voteType.toUpperCase()] += 1;
            return updatedReview;
          }
          return review;
        });
        return reviews;
      });
    }
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <Search search={this.searchQuery} />
        <ReviewList voteClick={this.onVoteClick} reviews={reviews} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('reviews'));
