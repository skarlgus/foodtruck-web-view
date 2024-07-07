export const fetchTrips = async () => {
    return {
      data: [
        { id: 1, title: 'Trip to Paris', description: 'Enjoy the city of light.' },
        { id: 2, title: 'Trip to New York', description: 'Experience the Big Apple.' },
        { id: 3, title: 'Trip to Tokyo', description: 'Discover the land of the rising sun.' },
        { id: 4, title: 'Trip to Sydney', description: 'Explore the beautiful Sydney Opera House.' },
        { id: 5, title: 'Trip to Rome', description: 'Visit the historic city of Rome.' },
        { id: 6, title: 'Trip to London', description: 'Enjoy the vibrant culture of London.' },
      ]
    };
  };
  
  export const fetchTripById = async (id) => {
    const trips = [
      { id: 1, title: 'Trip to Paris', description: 'Enjoy the city of light.' },
      { id: 2, title: 'Trip to New York', description: 'Experience the Big Apple.' },
      { id: 3, title: 'Trip to Tokyo', description: 'Discover the land of the rising sun.' },
      { id: 4, title: 'Trip to Sydney', description: 'Explore the beautiful Sydney Opera House.' },
      { id: 5, title: 'Trip to Rome', description: 'Visit the historic city of Rome.' },
      { id: 6, title: 'Trip to London', description: 'Enjoy the vibrant culture of London.' },
    ];
    return { data: trips.find(trip => trip.id === parseInt(id)) };
  };
  
  export const bookTrip = async (id, data) => {
    return { status: 200 };
  };
  