import './App.css';

function NavBar() {
  return (
    <section id="navbar">
      <div className="left-content">
        <a>Insert name</a>
      </div>
      <div className="menu-content">
        <span>
          <a>Page</a>
          <a>Page</a>
          <a>Page</a>
          <a>Log in</a>
        </span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section id="navbar">
      <div className="left-content">
        <a>Insert name</a>
      </div>
      <div className="menu-content">
        <span>
          <a>Contact Info</a>
        </span>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>
          coffee chat question here
        </p>
        <button>New Question</button>
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
