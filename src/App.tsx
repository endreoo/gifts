import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OddHaraldGift from './pages/OddHaraldGift';
import TonjeGift from './pages/TonjeGift';
import TorsteinGift from './pages/TorsteinGift';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/odd-harald" element={<OddHaraldGift />} />
      <Route path="/tonje" element={<TonjeGift />} />
      <Route path="/torstein" element={<TorsteinGift />} />
    </Routes>
  );
}

export default App;