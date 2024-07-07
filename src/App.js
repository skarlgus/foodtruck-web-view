import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';
import EventList_A from './pages/EventList_A';
import EventList_B from './pages/EventList_B';
import FoodTruckList_A from './pages/FoodTruckList_A';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Router>
      <AppBar />
      <main style={{ flex: 1, padding: '1rem', paddingBottom: '63px' }}>
        <Routes>
          <Route 
            path="/" 
            element={
              <div>
                <EventList_A />
                <FoodTruckList_A />
              </div>
            } 
          />
        </Routes>
      </main>
      <AppFooter />
    </Router>
  </div>
);

export default App;
