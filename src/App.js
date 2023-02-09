import React from 'react';
import './style.css';
import FetchAndDisplay from './Fetch&Display';
export default function App() {
  return (
    <div>
      <span>
        TASK: Fetch the data from
        api('https://jsonplaceholder.typicode.com/posts')) And Display Data in
        Table
      </span>
      <FetchAndDisplay />
    </div>
  );
}
