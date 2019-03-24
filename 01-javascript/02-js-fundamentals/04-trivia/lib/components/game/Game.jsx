import React, { Component } from 'react';
import { loadTriviaQuestions } from '../triviaApi';

import '../../../css/mystyles.css';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: undefined
    };
  }


  async componentDidMount() {
    const response = await loadTriviaQuestions();

    const json = await response.json();
    console.log('JSON: ', json.results);
    this.setState({
      game: json.results
    });

  }

  render() {
    const { game } = this.state;

    if (!game) {
      return 'LOADING>> ..';
    }

    return (
      <div className="container">

        <h2> {game[0].category}</h2>

        <h1 className="title">Bulma </h1>

        <p className="subtitle">
          Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
        </p>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons">
          <a className="button is-primary">Primary</a>
          <a className="button is-link">Link</a>
        </div>
      </div>
    );
  }
}