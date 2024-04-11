import React, { useState } from 'react';

function AcademicDrop() {
  const [country, setCountry] = useState('');
  const [educationLevel, setEducationLevel] = useState('');

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
  };

  return (
    <div>
      <label htmlFor="country">Country of Education:</label>
      <select id="country" value={country} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {/* Add your country options here */}
      </select>

      <label htmlFor="educationLevel">Highest Level of Education:</label>
      <select id="educationLevel" value={educationLevel} onChange={handleEducationLevelChange}>
        <option value="">Select Level</option>
        <option value="ug">Undergraduate</option>
        <option value="12th">12th</option>
        <option value="10th">10th</option>
      </select>

      {/* Conditional rendering based on selected options */}
      {educationLevel === 'ug' && (
        <>
          <input type="text" placeholder="Enter Undergraduate Details" />
          <input type="text" placeholder="Enter 12th Details" />
          <input type="text" placeholder="Enter 10th Details" />
        </>
      )}

      {educationLevel === '12th' && (
        <>
          <input type="text" placeholder="Enter 12th Details" />
          <input type="text" placeholder="Enter 10th Details" />
        </>
      )}

      {educationLevel === '10th' && (
        <input type="text" placeholder="Enter 10th Details" />
      )}
    </div>
  );
}

export default AcademicDrop;
