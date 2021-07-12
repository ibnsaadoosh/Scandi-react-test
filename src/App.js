import React, { Component} from 'react';
import {Query} from '@apollo/client/react/components';
import './App.css';
import {ApolloProvider, ApolloClient, HttpLink, from, InMemoryCache} from '@apollo/client';
import Category from './Components/Category';
// import LoadProducts  from './GraphQL/Queries';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});

class App extends Component 
{
  render()
  {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Category />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
