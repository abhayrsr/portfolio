import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './pages/loader/loading';
import Terminal from './pages/terminal/terminal';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loading/>} />
          <Route path="/terminal" element={<Terminal/>} />
          <Route />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
