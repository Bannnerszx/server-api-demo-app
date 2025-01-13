import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Ensure you have these components created
import About from './About';
import AppEntry from './react-native/AppEntry';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<AppEntry />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  </Router>
);

export default App;
