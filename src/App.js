import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Dashboard} from './pages/Dashboard';
import {Error} from './pages/Error';

/**
 * Manages routes & renders pages
 * @returns {JSX}
 */
function App() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" index element={<Home />} />
      <Route path="/user/:userId" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
