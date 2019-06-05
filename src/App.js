import React from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <>
      <h1 className="title">Welcome to Orbs Starter Kit!</h1>
      <article className="content">
        <section>
          <h3>What's starter kit?</h3>
          <p>
            Orbs starter kit is a good starting point for a new project. It
            already includes example for contract file with contract sdk, client
            side application based on <code>create-react-app</code> and{' '}
            <code>orbs-client-sdk</code> for communication with the contract.
          </p>
        </section>
        <section>
          <h3>Running processes:</h3>
          <ul>
            <li>
              Static server on{' '}
              <a href="http://localhost:4000">http://localhost:4000</a>
            </li>
            <li>
              Gamma server on{' '}
              <a href="http://localhost:8080">http://localhost:8080</a>
            </li>
            <li>
              Block Explorer on{' '}
              <a href="http://localhost:3000">http://localhost:3000</a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Counter Example</h3>
          <Counter />
        </section>
      </article>
    </>
  );
}

export default App;
