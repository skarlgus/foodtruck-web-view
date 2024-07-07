import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';
import EventList from './pages/EventList';
import FoodTruckList from './pages/FoodTruckList';
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
        <header>
          <CustomizedBreadcrumbs handleChange={handleChange} />
        </header>
        <main style={{ flex: 1, padding: '1rem', paddingBottom: '63px' }}>  
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
          <EventList />
          <FoodTruckList />
        </div>
      )}
      {selectedOption === '행사' && <EventList />}
      {selectedOption === '푸드트럭' && <div style={{ marginTop: '1rem' }}><FoodTruckList /></div>}
    </div>
  );
};

export default App;
