import React from 'react';
import './inline-styles.css';

export default function InlineStyles() {
  const countries = [
    {id: 1, name: 'India'},
    {id: 2, name: 'Germany'},
    {id: 3, name: 'USA'},
  ];
  const hardcodedStyles = {
    color: 'yellow',
  };

  const liColor = {
    color: 'green',
  };

  return (
    <div className="parent-div">
      <p style={hardcodedStyles}>This line supports hardcoded inline styling</p>
      <ul>
        {countries.map(country => (
          <li style={liColor} key={country.id}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
