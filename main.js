import React from 'react';
import ReactDOM from 'react-dom';
require("./style.scss");

class App extends React.Component {
  render(){
    return(
      <h1>Hello!</h1>
    )
  }
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('app')
);

export default App;
