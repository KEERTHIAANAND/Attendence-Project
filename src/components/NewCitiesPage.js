import React, { useState } from 'react';
import './NewCitiesPage.css';
import searchIcon from '../assets/search.png'; 
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom'; 

const NewCitiesPage = () => {
  const navigate = useNavigate();
  const [batches, setBatches] = useState(['Batch 1', 'Batch 2', 'Batch 3', 'Batch 4']);
  const [newBatch, setNewBatch] = useState('');

  const handleAddNew = () => {
    if (newBatch.trim() !== '') {
      setBatches([...batches, newBatch]);
      setNewBatch('');
    }
  };

  return (
    <div className="cities-container">
      <img src={logo} alt="Mahayogam Logo" className="logo" />
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>
      <div className="cities-list">
        {batches.map((batch, index) => (
          <button key={index} className="city-button">{batch}</button>
        ))}
      </div>
      <input 
        type="text" 
        placeholder="Add new batch" 
        className="input-field" 
        value={newBatch} 
        onChange={(e) => setNewBatch(e.target.value)} 
      />
      <button className="add-new-button" onClick={handleAddNew}>+ Add New</button>
      <div className="pagination">
        <button className="prev-button">&lt;</button>
        <span className="page-number">1 / 5</span>
        <button className="next-button">&gt;</button>
      </div>
    </div>
  );
};

export default NewCitiesPage;
