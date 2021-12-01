import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Dashboard} from './pages/Dashboard';
import {Error} from './pages/Error';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" index element={<Home title={'Home'} />} />
      {/* <Route path="/user/:id" element={<Dashboard />} /> */}
      <Route path="/user" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
