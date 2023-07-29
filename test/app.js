// app.js - Your React JavaScript file
function App() {
    const bodyStyles = {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f0f0f0",
      color: "#333",
    };
  
    const h1Styles = {
      color: "#007bff",
    };
  
    return (
      <div style={bodyStyles}>
        <h1 style={h1Styles}>Hello, this is a React SPA</h1>
        <nav>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  // Render the App component inside the #app div
  ReactDOM.render(<App />, document.getElementById("app"));