import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styling/universal.css"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ApolloProvider } from '@apollo/client';
import { GqlMainClient } from './graphql_basics';
import { QueryClientProvider, QueryClient } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

let ReactQueryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ApolloProvider client={GqlMainClient}>
          <QueryClientProvider client={ReactQueryClient} >
            <App />
          </QueryClientProvider>
        </ApolloProvider>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

