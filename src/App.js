import './App.css';
import './Fonts.css';
import './Colours.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NavBar() {
  return (
    <section id="navbar">
      <div className="left-content">
        <a href="logo">Insert name</a>
      </div>
      <div className="menu-content">
        <span>
          <a href="tbd">Page</a>
          <a href="tbd">Page</a>
          <a href="tbd">Page</a>
          <a href="tbd">Log in</a>
        </span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section id="navbar">
      <div className="left-content">
        <a href="logo">Insert name</a>
      </div>
      <div className="menu-content">
        <span>
          <a href="tbd">Contact Info</a>
        </span>
      </div>
    </section>
  );
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    newQuestion();
  }, []);

  const newQuestion = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000', {prompt:'test'});
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      console.error('Error message:', error.message);
    }
  };

  useEffect(() => {
    stalk();
  }, []);

  const stalk = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000', {prompt:'test'});
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      console.error('Error message:', error.message);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        {/* ok so i don't really know what's going on down there */}
        {data ? (
          <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button onClick={newQuestion}>New Question</button>
        <button onClick={stalk}>LinkedIn Stalk</button>
        <div className="menu-content">
          <button>Upvote</button>
          <button>Downvote</button>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
