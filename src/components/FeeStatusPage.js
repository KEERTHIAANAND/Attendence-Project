import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './FeeStatusPage.css';
import profilePic from '../assets/profile.png'; // Adjust the path as necessary

const FeeStatusPage = () => {
  const location = useLocation();
  const studentName = location.state?.studentName || 'Unknown'; // Ensure the student name is retrieved correctly

  const [feeStatus, setFeeStatus] = useState([
    { month: 'January', status: 'pending' },
    { month: 'February', status: 'pending' },
    { month: 'March', status: 'pending' },
    { month: 'April', status: 'pending' },
    { month: 'May', status: 'pending' },
    { month: 'June', status: 'pending' },
    { month: 'July', status: 'pending' },
    { month: 'August', status: 'pending' },
    { month: 'September', status: 'pending' },
    { month: 'October', status: 'pending' },
    { month: 'November', status: 'pending' },
    { month: 'December', status: 'pending' },
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedFeeStatus = [...feeStatus];
    updatedFeeStatus[index].status = newStatus;
    setFeeStatus(updatedFeeStatus);
  };

  return (
    <div className="fee-status-container">
      <div className="profile-section">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="profile-name">{studentName}</span> {/* Display the student's name */}
      </div>
      <div className="fee-status-header">
        <span>Month</span>
        <span>Fee Status</span>
      </div>
      <div className="fee-status-list">
        {feeStatus.map((item, index) => (
          <div key={index} className="fee-status-item">
            <span>{item.month}</span>
            {item.status === 'paid' ? (
              <span className="status-paid">Paid</span>
            ) : item.status === 'not paid' ? (
              <span className="status-not-paid">Not Paid</span>
            ) : (
              <div className="status-buttons">
                <button
                  className="status-button present"
                  onClick={() => handleStatusChange(index, 'paid')}
                >
                  ✔
                </button>
                <button
                  className="status-button absent"
                  onClick={() => handleStatusChange(index, 'not paid')}
                >
                  ✖
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeStatusPage;
