import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri:"http://localhost:5000/graphql"
});
const QUERY = gql`
{
  tickets {
    id,
    subject
  }
}
`;
const CallApi =  React.memo(() => {
    const { loading, error, data } = useQuery(QUERY);
  if (loading) return (<p>Loading...</p>)
  if (error) return <p>Error :(</p>;
    return (data.tickets.map(({ id, subject }) => (
        <div key={id}>
          <p>
            subject name : {subject}
          </p>
        </div>
      )));  

    });
const App = () => (
    <ApolloProvider client={client}>
       
      <div>
        <h2>My first Apollo app 🚀</h2>
        <CallApi />
      </div>
    </ApolloProvider>
  );

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
