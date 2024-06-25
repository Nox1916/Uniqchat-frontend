import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import chat from './components/chat';
import login from './components/login';
// Adjust import statements to use capitalized component names
import Login from './components/login'; // Assuming './components/login' is correct path
import Chat from './components/chat'; // Assuming './components/chat' is correct path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Login />} /> {/* Default route redirects to Login */}
      </Routes>
    </Router>
  );
}

export default App;
