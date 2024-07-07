import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';
import EventList_A from './pages/EventList_A';
import FoodTruckList_A from './pages/FoodTruckList_A';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const App = () => {
  const [selectedTab, setSelectedTab] = useState('all'); // 'all', 'events', 'foodtrucks'

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <AppBar />
        <main style={{ flex: 1, padding: '1rem', paddingBottom: '63px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <StyledLink to="/" onClick={() => handleTabChange('all')}>전체</StyledLink>
            <StyledLink to="/events" onClick={() => handleTabChange('events')}>행사</StyledLink>
            <StyledLink to="/foodtrucks" onClick={() => handleTabChange('foodtrucks')}>푸드트럭</StyledLink>
          </div>
          <Routes>
            <Route path="/" element={<AllLists />} />
            <Route path="/events" element={<EventList_A />} />
            <Route path="/foodtrucks" element={<FoodTruckList_A />} />
          </Routes>
        </main>
        <AppFooter />
      </Router>
    </div>
  );
};

const AllLists = () => (
  <div>
    <EventList_A />
    <FoodTruckList_A />
  </div>
);

export default App;
