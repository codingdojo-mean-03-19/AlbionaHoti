import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game/Game.jsx';

class App extends React.Component {
  state = { 
    answer: 42,
  }

  asyncFunc = () => {
    return Promise.resolve(37);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  render() {
    return (
      <Game />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);