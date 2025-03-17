import React, { useState } from 'react';
import './StudentListPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

const StudentListPage = () => {
  const [students, setStudents] = useState([
    { name: 'Keerthi', status: 'none' },
    { name: 'Aanand', status: 'none' },
    { name: 'Manish', status: 'none' },
    { name: 'Prakkash', status: 'none' },
    { name: 'Kavin', status: 'none' },
    { name: 'Kumar', status: 'none' },
  ]);
  const location = useLocation();
  const batchName = location.state?.batchName || 'Unknown Batch';
  const [newStudent, setNewStudent] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleAddNew = () => {
    if (newStudent.trim() !== '') {
      setStudents([...students, { name: newStudent, status: 'none' }]);
      setNewStudent('');
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedStudents = [...students];
    updatedStudents[index].status = newStatus;
    setStudents(updatedStudents);
  };

  const handleNavigateToFeeStatus = (studentName) => {
    navigate('/fee-status', { state: { studentName } });
  };

  const handleSortAlphabetically = () => {
    const sortedStudents = [...students].sort((a, b) => a.name.localeCompare(b.name));
    setStudents(sortedStudents);
  };

  const handleRemoveStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-list-container">
      <h2>ATTENDANCE</h2>
      <h3>{batchName}</h3>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="filter-button" onClick={handleSortAlphabetically}>
          Sort A-Z
        </button>
      </div>
      <div className="student-list">
        {filteredStudents.map((student, index) => (
          <div key={index} className="student-item">
            <span 
              className="student-name" 
              onClick={() => handleNavigateToFeeStatus(student.name)}
            >
              {student.name}
            </span>
            <div className="status-buttons">
              {student.status === 'present' ? (
                <span className="status-present">Present</span>
              ) : student.status === 'absent' ? (
                <span className="status-absent">Absent</span>
              ) : (
                <>
                  <button
                    className="status-button present"
                    onClick={() => handleStatusChange(index, 'present')}
                  >
                    ✔
                  </button>
                  <button
                    className="status-button absent"
                    onClick={() => handleStatusChange(index, 'absent')}
                  >
                    ✖
                  </button>
                </>
              )}
            </div>
            <button 
              className="remove-button" 
              onClick={() => handleRemoveStudent(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {showInput && (
        <input 
          type="text" 
          placeholder="Add new student" 
          className="input-field" 
          value={newStudent} 
          onChange={(e) => setNewStudent(e.target.value)} 
        />
      )}
      <button className="add-new-button" onClick={handleAddNew}>
        {showInput ? "Submit" : "+ Add New"}
      </button>
    </div>
  );
};

export default StudentListPage;
