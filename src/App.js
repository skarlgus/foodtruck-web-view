import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Section1 from './pages/Section1'; // Section1 컴포넌트를 임포트
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/section1" element={<Section1 />} /> {/* Section1 경로 추가 */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;