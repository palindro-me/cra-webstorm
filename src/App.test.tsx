import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a>
            className="App-link"
            href="https://reactjs2.org"
            target="_blank"
            rel="noopener noreferrer"
            Learn React
            <p>blabla</p>
          </a>
          <div>dev branch commit</div>
          <div>dev branch commit1</div>
          <p>11</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </header>
      </div>
  );
}

export default App;