import React, { useState } from 'react';
import './CitiesPage.css';
import { useNavigate } from 'react-router-dom';

const CitiesPage = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState(['Coimbatore', 'Erode']);
  const [newCity, setNewCity] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddNew = () => {
    if (newCity.trim() !== '') {
      setCities([...cities, newCity]);
      setNewCity('');
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cities-container">
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="cities-list">
        {filteredCities.map((city, index) => (
          <button key={index} className="city-button" onClick={() => navigate('/new-cities')}>{city}</button>
        ))}
      </div>
      {showInput && (
        <input 
          type="text" 
          placeholder="Add New City" 
          className="input-field" 
          value={newCity} 
          onChange={(e) => setNewCity(e.target.value)} 
        />
      )}
      <button className="add-new-button" onClick={handleAddNew}>
        {showInput ? "Submit" : "+ Add New"}
      </button>
      <div className="pagination">

      </div>
    </div>
  );
};

export default CitiesPage;
