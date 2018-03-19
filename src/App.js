import React, { Component } from 'react';
import {connect} from 'react-redux';
// import './App.css';
import {getArticles} from './actions/articles';



class App extends Component {
  addCandidates() {
    console.log('add candidat', this.candidatesInput.value);
    this.props.onAddCandidates(this.candidatesInput.value);
    this.candidatesInput.value = '';
  }

  findCandidates() {
    console.log('find candidat', this.searchInput.value);
    this.props.onFindCandidates(this.searchInput.value);
  }



  render() {
    console.log(this.props.articles)
    return (
      <div>
        <div>
          <input type="text" ref={(input) => {this.candidatesInput = input}}/>
          <button onClick={this.addCandidates.bind(this)}>Add Candidat</button>
        </div>
        <div>
          <input type="text" ref={(input) => {this.searchInput = input}}/>
        <button onClick={this.findCandidates.bind(this)}>Search Candidat</button>
        </div>
        <div>
          <button onClick={this.props.onGetArticles}>Get Articles</button>
        </div>
        <ul>
          {this.props.candidates.map((candidat, index) =>
            <li key={index}>{candidat.name}</li>
          )}
        </ul>
        <ul>
          {this.props.articles.map((article, index) =>
            <li key={index}>{article.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
      candidates: state.candidates.filter(candidat => candidat.name.includes(state.filterCandidates)),
      articles: state.articles

    }),
  dispatch => ({
    onAddCandidates: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({type: 'ADD_CANDIDATES', payload});
    },
    onFindCandidates: (name) => {
      dispatch({type: 'FIND_CANDIDATES', payload: name});
    },
    onGetArticles: () => {
      dispatch(getArticles());
    }
  })
)(App);
