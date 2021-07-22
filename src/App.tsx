import React from 'react';
import { QueryClientProvider } from 'react-query';
import queryClient from './API/query-client';
import './App.css';
import Layout from './components/Layout/Layout';

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App w-screen md:h-screen p-5">
        <Layout />
      </div>
    </QueryClientProvider>
  );
}

export default App;
