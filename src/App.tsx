import React from 'react';
import './App.css';
import Layout from './components/Layout';

function App(): JSX.Element {
  return (
    <div className="App w-screen md:h-screen p-5">
      <Layout />
    </div>
  );
}

export default App;
