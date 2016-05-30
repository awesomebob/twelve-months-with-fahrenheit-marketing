import React from 'react';
import ReactDOM from 'react-dom';
import { RadiumStarterRoot, RadiumStarter, Button } from 'radium-starter';
require("./style.scss");

@RadiumStarter
class App extends React.Component {
  render(){
    let t = this.theme;
    return(
      <div>
        <h1 style={{ ':hover': { color: t.errorColor } }}>Hello!</h1>
        <Button rsLarge rsPrimary>Sign up</Button>
      </div>
    )
  }
}

ReactDOM.render(
  <RadiumStarterRoot theme={{ primaryColor: '#2196F3' }}>
    <App />
  </RadiumStarterRoot>,
  document.getElementById('app')
);

export default App;
