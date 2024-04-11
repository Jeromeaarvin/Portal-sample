import React, { useState } from 'react';
import Switch from 'react-input-switch';

function ManageStudentsPage() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        mobileNumber: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        immigrationToggle: false,
        otherToggle: false,
        maritalStatus: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleToggleChange = (toggleName, value) => {
      setFormData(prevToggleData => ({
          ...prevToggleData,
          [toggleName]: value === 'yes' ? true : false
      }));
      // Add individual logic for each toggle button if needed
      if (toggleName === 'immigrationToggle') {
          // Handle logic for immigration toggle button
      } else if (toggleName === 'otherToggle') {
          // Handle logic for other toggle button
      }
      // Add more conditions for additional toggle buttons as needed
      console.log(toggleName,value)
  }
  const [academicData,setAcademicData]=useState({
    ugHighLvlEducation:''
  })
  const academicChange = (e) => {
    const {name,value} = e.target;
    setAcademicData(prevState => ({
        ...prevState,
        [name]: value 
    }));
  }

  const [workData,setWorkData] = useState({
    orgName:''
  })
  const handleWorkChange = (e) => {
    const {name,value} = e.target;
    setWorkData(prevState => ({
        ...prevState,
        [name]: value 
    }));
  }

  const [testData,setTestData] = useState({
    greOverallScore:''
  })
  const handleTestChange = (e) => {
    const {name,value} = e.target;
    setTestData(prevState => ({
        ...prevState,
        [name]: value 
    }));
  }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const combinedData = {
        //     formData: formData,
        //     academicData: academicData,
        //     workData:workData,
        //     testData: testData
        //   };

        console.log("Form Data:", formData);
        // Validate date of birth
        const validationErrors = {};
        if (!formData.dateOfBirth.trim()) {
            validationErrors.dateOfBirth = "Date of Birth is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // Prevent form submission if there are validation errors
        }

        // Your form submission logic
        try {
            // Example: Send form data to an API endpoint
            const response = await fetch('http://localhost:9002/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            console.log('Form submitted successfully');
            // Optionally, reset form fields
            setFormData({
                firstname: '',
                lastname: '',
                mobileNumber: '',
                email: '',
                dateOfBirth: '',
                gender: '',
                maritalStatus: ''
            });
            // setAcademicData({
            //     ugHighLvlEducation:''
            // })
            // setWorkData({
            //     orgName:''
            // })
            // setTestData({
            //     greOverallScore:''
            // })
            setErrors({}); // Clear any previous errors
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, show message to user, etc.
        }
    };

    return (
        <div>
            {/* Form fields */}
            <form onSubmit={handleSubmit}>
                {/* Other form fields */}
                <input
    type='text'
    name='firstname'
    value={formData.firstname}
    onChange={handleChange}
    placeholder='First Name'
/>

<input
    type='text'
    name='lastname'
    value={formData.lastname}
    onChange={handleChange}
    placeholder='Last Name'
/>

<input
    type='text'
    name='mobileNumber'
    value={formData.mobileNumber}
    onChange={handleChange}
    placeholder='Mobile Number'
/>

<input
    type='email'
    name='email'
    value={formData.email}
    onChange={handleChange}
    placeholder='Email'
/>

                <div className='DOB'>
                    <p>Date of Birth*</p>
                    <input
                        type='date'
                        name='dateOfBirth'
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        placeholder='Select Date'
                    />
                    {errors.dateOfBirth && <span className='error'>{errors.dateOfBirth}</span>}
                </div>
                <div className='DOB'>
                    <p>acadmic*</p>
                    <input
                        type='text'
                        name='ugHighLvlEducation'
                        value={academicData.ugHighLvlEducation}
                        onChange={academicChange}
                        placeholder='S'
                    />
                </div>
                <div className='DOB'>
                    <p>work*</p>
                    <input
                        type='text'
                        name='orgName'
                        value={workData.orgName}
                        onChange={handleWorkChange}
                        placeholder='Se'
                    />
                </div>
                <div className='DOB'>
                    <p>work*</p>
                    <input
                        type='text'
                        name='greOverallScore'
                        value={testData.greOverallScore}
                        onChange={handleTestChange}
                        placeholder='e'
                    />
                </div>
                




                <div className='DOB'>
                    <p>Gender*</p>
                    <select
                        name='gender'
                        value={formData.gender}
                        onChange={handleChange}
                        className='Gender-dropdown'
                    >
                        <option value=''>Select</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </div>
                <div className='DOB'>
                    <p>Marital Status*</p>
                    <select
                        name='maritalStatus'
                        value={formData.maritalStatus}
                        onChange={handleChange}
                        className='Gender-dropdown'
                    >
                        <option value=''>Select</option>
                        <option value='Married'>Married</option>
                        <option value='Un-married'>Un-married</option>
                    </select>
                </div>
                <p>immigrationToggle</p>
                <Switch 
                on="yes" 
                off="no" 
                value={formData.immigrationToggle ? 'yes' : 'no'} 
                onChange={(value) => handleToggleChange('immigrationToggle', value)} 
            />
            <p>otherToggle</p>
            <Switch 
                on="yes" 
                off="no" 
                value={formData.otherToggle ? 'yes' : 'no'} 
                onChange={(value) => handleToggleChange('otherToggle', value)} 
            />
                {/* Other form fields */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ManageStudentsPage;
