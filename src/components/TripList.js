import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrips } from '../api';

const TripList = () => {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getTrips = async () => {
      const response = await fetchTrips();
      setTrips(response.data);
    };
    getTrips();
  }, []);

  const filteredTrips = trips.filter(trip =>
    trip.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Trips</h1>
      <input 
        type="text"
        placeholder="Search for trips"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      <ul>
        {filteredTrips.map(trip => (
          <li key={trip.id}>
            <Link to={`/trips/${trip.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={`${process.env.PUBLIC_URL}/placeholder.png`} alt={trip.title} />
              <div>
                <h2>{trip.title}</h2>
                <p>{trip.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
