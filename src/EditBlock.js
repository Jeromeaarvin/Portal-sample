import React, { useState } from 'react';

const EditBlock = () => {
  const [editMode, setEditMode] = useState(true); // Initially in edit mode
  const [academicData, setAcademicData] = useState({
    ugInstitutionName: '',
    ugCity: '',
    ugStateOfStudy: '',
    ugCountryOfStudy: '',
    ugStartDate: '',
    ugEndDate: '',
  });

  const handleAcademicChange = (e) => {
    const { name, value } = e.target;
    setAcademicData({ ...academicData, [name]: value });
  };

  const handleSave = () => {
    // Save functionality here (e.g., send data to server)
    setEditMode(false); // Switch to display mode after saving
  };

  const handleEdit = () => {
    setEditMode(true); // Switch back to edit mode
  };

  const handleRemove = () => {
    // Removal functionality here
  };

  return (
    <section className='p-sec-4'>
      {editMode ? ( // Edit mode
        <div className='personal-info'>
          <div className='DOB'>
            <p>Name of the Institution*</p>
            <input
              type='text'
              name='ugInstitutionName'
              value={academicData.ugInstitutionName}
              onChange={handleAcademicChange}
              placeholder=''
            />
          </div>
          {/* Other input fields... */}
          <button onClick={handleSave}>Save</button>
        </div>
      ) : ( // Display mode
        <div className='academic-block'>
          <p>Name of the Institution: {academicData.ugInstitutionName}</p>
          {/* Other display fields... */}
          <p>Attended from {academicData.ugStartDate} to {academicData.ugEndDate}</p>
          <div className='button-container'>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleRemove}>Remove</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EditBlock;
