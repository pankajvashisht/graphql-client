import React from 'react';
import ApolloClient, { gql } from 'apollo-boost'
import logo from './logo.svg';
import './App.css';



function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
  });
  client
  .query({
    query: gql`
      {
        tickets {
          id,
          subject
        }
      }
    `
  })
  .then(result => console.log(result));
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
