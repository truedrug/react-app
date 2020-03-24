import React, {useState} from 'react';

const flights = [
  {
    id: 1,
    name: 'Airbus 380',
    capacity: 500,
  },
  {
    id: 2,
    name: 'Airbus 381',
    capacity: 501,
  },
  {
    id: 3,
    name: 'Airbus 382',
    capacity: 502,
  },
];

export default function FunctionalComponent() {
  const [state, setState] = useState({flights});

  function nameChangeHandler(event, flight) {
    const newName = event.target.value;
    flight.name = newName;
    setState({flights});
  }

  return (
    <ul>
      {state.flights.map(flight => {
        return (
          <li key={flight.id}>
            <p>Name: {flight.name}</p>
            <p>Capacity: {flight.capacity}</p>
            Change name:{' '}
            <input
              type="text"
              onChange={event => nameChangeHandler(event, flight)}
              value={flight.name}
            />
          </li>
        );
      })}
    </ul>
  );
}
