// ApplicationPage.js
import React, { useState, useContext } from 'react';
import ApplicationCountContext from './ApplicationCountContext';

function ApplicationPage() {
  const { incrementApplicationCount } = useContext(ApplicationCountContext);

  const [courseData, setCourseData] = useState({
    year: '',
    intake: '',
    university: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddCourse = () => {
    // Check if any dropdown is empty
    if (!courseData.year || !courseData.intake || !courseData.university || !courseData.course) {
      // If any dropdown is empty, display an error message or handle it as per your UI/UX requirements
      alert("Please select all dropdowns");
      return;
    }

    // Here you can add your logic to handle adding the course, for example, sending it to a backend or storing it in state
    // After successfully adding the course, you can increment the application count
    incrementApplicationCount();

    // Optionally, you can reset the form
    setCourseData({
      year: '',
      intake: '',
      university: '',
      course: ''
    });
  };

  return (
    <div>
      <h2>Add Course</h2>
      <div>
        <label htmlFor="year">Year:</label>
        <select id="year" name="year" value={courseData.year} onChange={handleChange}>
          <option value="">Select Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          {/* Add options for years */}
        </select>
      </div>
      <div>
        <label htmlFor="intake">Intake:</label>
        <select id="intake" name="intake" value={courseData.intake} onChange={handleChange}>
          <option value="">Select Intake</option>
          <option value="fall">Fall</option>
          <option value="summer">Summer</option>
          {/* Add options for intakes */}
        </select>
      </div>
      <div>
        <label htmlFor="university">University:</label>
        <select id="university" name="university" value={courseData.university} onChange={handleChange}>
          <option value="">Select University</option>
          <option value="abc">ABC University</option>
          <option value="bcs">BCS University</option>
          {/* Add options for universities */}
        </select>
      </div>
      <div>
        <label htmlFor="course">Course:</label>
        <select id="course" name="course" value={courseData.course} onChange={handleChange}>
          <option value="">Select Course</option>
          <option value="CSE">Computer Science Engineering</option>
          <option value="Science">Science</option>
          {/* Add options for courses */}
        </select>
      </div>
      <button onClick={handleAddCourse}>Add Course</button>
    </div>
  );
}

export default ApplicationPage;
