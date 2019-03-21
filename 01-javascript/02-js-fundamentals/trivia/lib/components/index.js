import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Heading, Columns, Column, Box } from 'react-bulma-components/full';

const styles = {
  box: {
    width: 250
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      questions: [],
      results: [],
      isLoaded: false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleQuestion = this.handleQuestion.bind(this);
  }


  asyncFunc = () => {
    return Promise.resolve(37);
  };

  // componentDidMount() {
  //   fetch('https://opentdb.com/api.php?amount=10&type=multiple')
  //     .then(res => res.json())
  //     .then(
  //       (results) => {
  //         this.setState({
  //           isLoaded: true,
  //           results: results.results
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }

  render() {
    // const { error, isLoaded, results } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>LLLoading...</div>;
    // }
    return (
      <div className="container">
        <section className="section">
          <Columns>
            <Columns.Column>
              {/* <h2 className="title">{results[0].category}</h2> */}
              <Box style={styles.box}>
              </Box>
              <Box style={styles.box}>
              </Box>
              <Box style={styles.box}>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <h2 className="title">Entertainment</h2>
              <Box style={styles.box}>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <h2 className="title">Science</h2>
              <Box style={styles.box} onClick={this.handleQuestion}>
              </Box>
            </Columns.Column>
            <Columns.Column>
              <h2 className="title">Technology</h2>
              <Box style={styles.box}>
                {/* <Heading size={5} renderAs="p">
                  Narrow column
                </Heading>
                <Heading subtitle renderAs="p">
                  This column is only 200px wide.
                </Heading> */}
              </Box>
            </Columns.Column>
          </Columns>
        </section>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);