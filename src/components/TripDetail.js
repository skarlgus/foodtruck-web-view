import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchTripById } from '../api';

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const getTrip = async () => {
      const response = await fetchTripById(id);
      setTrip(response.data);
    };
    getTrip();
  }, [id]);

  if (!trip) return <div>Loading...</div>;

  return (
    <div>
      <h1>{trip.title}</h1>
      <img src={`${process.env.PUBLIC_URL}/placeholder.png`} alt={trip.title} style={{ width: '300px', height: '300px' }} />
      <p>{trip.description}</p>
      <Link to={`/trips/${trip.id}/book`}>Book Now</Link>
    </div>
  );
};

export default TripDetail;
