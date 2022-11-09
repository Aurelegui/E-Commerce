import Pay from './components/Pay';
import Success from './components/Success';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/pay' element={<Pay />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
