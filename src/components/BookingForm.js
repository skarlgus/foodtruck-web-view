import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { bookTrip } from '../api';

const BookingForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await bookTrip(id, { name, email });
    if (response.status === 200) {
      setMessage('Booking successful!');
    } else {
      setMessage('Booking failed.');
    }
  };

  return (
    <div>
      <h1>Book Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
