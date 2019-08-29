import React, { component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import Search from './components/Search.jsx';
import ReviewList from './components/ReviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      reviews: []
    }
  }

  componentDidMount() {
    fetch('/api/reviews/37')
      .then((response) => {
        response = response.json();
        return response;
      })
      .then((reviews) => {
        this.setState({ reviews: reviews.reviews });
      });
  }

  search (term, updateCB) {
    // stretch goal
  }

  updateVotes(voteInfo) {
    if (voteInfo.msg === 'Success') {
      this.setState(state => {
        const reviews = state.reviews.map(function(review) {
          if (review.ID === voteInfo.reviewId) {
            review[voteInfo.voteType.toUpperCase()] += 1;
          }
          return review;
        });
        return reviews;
      });
    }
  }

  onVoteClick (e) {
    var info = {};
    info.reviewId = e.target.getAttribute('reviewId');
    info.voteType = e.target.getAttribute('class').split(' ')[1];
    $.post('/api/reviews/vote', { info }, this.updateVotes.bind(this));
  }

  render () {

    return (
      <div>
        <h1>Reviews</h1>
        <ReviewList voteClick={this.onVoteClick.bind(this)} reviews={this.state.reviews}/>
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));