import React, { Component } from 'react';
import { loadBookQuestions, loadMathQuestions, loadAnimeMangaQuestions } from '../triviaApi';

import '../../../css/mystyles.css';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book_results: undefined,
      math_results: undefined,
      anime_results: undefined
    };


  }


  async componentDidMount() {
    const book_response = await loadBookQuestions();

    const book_json = await book_response.json();
    console.log('Book JSON: ', book_json.results);

    const math_response = await loadMathQuestions();

    const math_json = await math_response.json();
    console.log('Math JSON: ', math_json.results);

    const anime_response = await loadAnimeMangaQuestions();

    const anime_json = await anime_response.json();
    console.log('Anime JSON: ', JSON.stringify(anime_json.results));
    this.setState({
      book_results: book_json.results,
      math_results: math_json.results,
      anime_results: anime_json.results
    });

  }


  render() {
    const { book_results, anime_results, math_results } = this.state;
    console.log('yeee', book_results);
    if (!book_results) {
      return 'LOADING>> ..';
    }

    function RenderCategories(res) {
      return res.map((item, key) =>
        (
          <div className="box" key={key}>
            {/* <h2 className="subtitle" key={key}>{JSON.parse(item.question.replace(/&quot;/g,'"'))}</h2> */}
            <h2 className="subtitle" key={key}>{item.question}</h2>
          </div>
        ));
    }

    return (
      <div className="container">
        <section className="section">
          <div className="columns is-mobile">
            <div className="column">
              <h1 className="title">{book_results[0].category}</h1>
              <div className="columns">
                <div className="column">
                  {RenderCategories(book_results)}
                </div>
              </div>
            </div>
            <div className="column">
              <h1 className="title">{anime_results[0].category}</h1>
              <div className="columns">
                <div className="column">
                  {RenderCategories(anime_results)}
                </div>
              </div>
            </div>
            <div className="column">
              <h1 className="title">{math_results[0].category}</h1>
              <div className="columns">
                <div className="column">
                  {RenderCategories(math_results)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <h1 className="title">Bulma </h1>

        <p className="subtitle">
          Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
        </p>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>

        <div className="buttons">
          <a className="button is-primary">Primary</a>
          <a className="button is-link">Link</a>
        </div>
      </div>
    );
  }
}