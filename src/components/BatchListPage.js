import React, { useState } from 'react';
import './BatchListPage.css';

const BatchListPage = () => {
  const [batches, setBatches] = useState(['Batch A', 'Batch B', 'Batch C']);
  const [newBatch, setNewBatch] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleAddNew = () => {
    if (newBatch.trim() !== '') {
      setBatches([...batches, newBatch]);
      setNewBatch('');
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  };

  return (
    <div className="batch-list-container">
      <h2>Batch List</h2>
      <div className="batch-list">
        {batches.map((batch, index) => (
          <div key={index} className="batch-item">
            {batch}
          </div>
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
        {showInput ? 'Submit' : '+ Add New'}
      </button>
    </div>
  );
};

export default BatchListPage;