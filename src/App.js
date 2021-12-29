import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = 'Welcome to CGCS';

    return (
      <div>
        <Greeting greeting={greeting} />
      </div>
    );
  }
}

const Greeting = props => <h1>{props.greeting}</h1>;

export default App;