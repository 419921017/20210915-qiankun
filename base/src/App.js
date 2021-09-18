import { Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/vue">vue应用</Link>
        <Link to="/react">react应用</Link>
      </BrowserRouter>
      <div id="container"></div>
    </div>
  );
}

export default App;
