import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainAppComponent from './components/MainAppComponent';
import ChatComponent from './components/ChatComponent';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainAppComponent />} />
      <Route path="/chat/:id" element={<ChatComponent />} />
    </Routes>
  </Router>
);

export default App;
