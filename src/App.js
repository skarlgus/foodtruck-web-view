import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';
import EventList_A from './pages/EventList_A';
import FoodTruckList_A from './pages/FoodTruckList_A';
import CustomizedBreadcrumbs from './components/CustomizedBreadcrumbs';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('전체');

  const handleChange = (event, newValue) => {
    setSelectedOption(newValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <AppBar />
        <main style={{ flex: 1, padding: '1rem', paddingBottom: '63px' }}>
          <CustomizedBreadcrumbs handleChange={handleChange} />
          <Routes>
            <Route path="/" element={<MainContent selectedOption={selectedOption} />} />
          </Routes>
        </main>
        <AppFooter />
      </Router>
    </div>
  );
};

const MainContent = ({ selectedOption }) => {
  return (
    <div>
      {selectedOption === '전체' && (
        <div>
          <EventList_A />
          <FoodTruckList_A />
        </div>
      )}
      {selectedOption === '행사' && <EventList_A />}
      {selectedOption === '푸드트럭' && <div style={{ marginTop: '1rem' }}><FoodTruckList_A /></div>}
    </div>
  );
};

export default App;
