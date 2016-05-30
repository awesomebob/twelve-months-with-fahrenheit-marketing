import React from 'react';
import ReactDOM from 'react-dom';
import { RadiumStarterRoot, RadiumStarter, Button } from 'radium-starter';
require("./style.scss");

@RadiumStarter
class App extends React.Component {
  render(){
    let t = this.theme;
    return(
      <div style={{
        padding: '10px 30px',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: 'auto'
      }}>
        <h1 style={{
          'textAlign': 'center',
          'color': t.primaryColor,
          ':hover': { color: t.errorColor },
          'transition': 'color 1000ms'
        }}>
          Twelve Months with Fahrenheit Marketing
        </h1>
        <p>In the past year, I have been directly involved in the following projects:</p>
        <ProjectList/>
        <div style={{
          padding: '30px 0',
          textAlign: 'center'
        }}>
          <p>This page reflects the contributions of <a href="https://awesomebob.xyz" target="_blank">Bob Bolender</a> as a Web Developer at Fahrenheit Marketing.</p>
          <p>I built this to play with <a href="https://github.com/FormidableLabs/radium" target="_blank">Radium</a></p>
        </div>
      </div>
    )
  }
}

@RadiumStarter
class ProjectList extends React.Component {
  render(){
    let projects = require('./twelve-months.json');
    let projectItems = projects.map(function(project, index){
      if (project.name) return <Project key={index} data={project}/>
    });
    return(
      <div>
        {projectItems}
      </div>
    )
  }
}

@RadiumStarter
class Project extends React.Component {
  render(){
    let techItems = this.props.data.tech.map((tech, index) => {
      return <li key={index}>{tech}</li>;
    });
    let url = this.props.data.link;
    let t = this.theme;
    return(
      <div key={this.props.data.name} style={{
        borderBottom: '1px solid #333',
        padding: '20px',
        textAlign: 'left',
        ':hover': {
          backgroundColor: '#ddd',
        },
        transition: 'all 500ms'
      }}>
        <h2>{this.props.data.name}</h2>
        <p><a style={{
          ':hover': {
            color: t.primaryColor,
            letterSpacing: '0.5px'
          },
          'transition': 'all 500ms'
        }} href={url} target="_blank">{url}</a></p>
        <ul>
          {techItems}
        </ul>
        <p>{this.props.data.desc}</p>
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
