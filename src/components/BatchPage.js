import React, { useState } from 'react';
import './CitiesPage.css';
import { useNavigate } from 'react-router-dom';

const BatchPage = () => {
  const [batches, setBatches] = useState(['Batch 1', 'Batch 2']);
  const [newBatch, setNewBatch] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleAddNew = () => {
    if (newBatch.trim() !== '') {
      setBatches([...batches, newBatch]);
      setNewBatch('');
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  };

  const filteredBatches = batches.filter(batch =>
    batch.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredBatches.map((batch, index) => (
          <button 
            key={index} 
            className="city-button" 
            onClick={() => navigate('/student-list')}
          >
            {batch}
          </button>
        ))}
      </div>
      {showInput && (
        <input 
          type="text" 
          placeholder="Add New Batch" 
          className="input-field" 
          value={newBatch} 
          onChange={(e) => setNewBatch(e.target.value)} 
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

export default BatchPage;
