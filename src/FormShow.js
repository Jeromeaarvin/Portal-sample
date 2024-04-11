import React, { useState } from 'react';

function FormShow() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobileNumber: '',
    email: ''
  });
  const [showDetails, setShowDetails] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic goes here

    // Assuming validation passed, you can display the entered data
    setShowDetails(true);
  };

  return (
    <form onSubmit={handleSubmit}>
     <div className='Register-student-form'>
        <div className='form-first-name'>
            <h5>First Name<span>*</span></h5>
            <input 
            className='Firstname-input' 
            type='firstname'
            name='firstname'
            onChange={handleChange} 
            placeholder='First Name'
            autoComplete='off'
            value={formData.firstname}>
            </input>
            {errors.firstname && <span className='errors'>{errors.firstname}</span>}
        </div>
        <div className='form-first-name'>
            <h5>Last Name<span>*</span></h5>
            <input 
            className='Firstname-input'
            type='lastname'
            name='lastname'
            onChange={handleChange}
             placeholder='Last Name'
             value={formData.lastname}> 
             </input>
             {errors.lastname && <span className='errors'>{errors.lastname}</span>}
        </div>
        <div className='form-first-name'>
            <h5>Mobile Number<span>*</span></h5>
            <div className='countrycode'>
                {/* Country code dropdown
            <select value={selectedCountryCode} onChange={handleChangeCountryCode}>
                {countryCodes.map(country => (
                    <option key={country.code} value={country.code}>{country.label}</option>
                ))}
            </select> */}
            <input
             type='text' 
             name='mobileNumber'
             onChange={handleChange}
            className='Firstname-input' placeholder='Mobile Number'
            value={formData.mobileNumber}>
            </input>
            </div>
            {errors.mobileNumber && <span className='errors'>{errors.mobileNumber}</span>}
        </div>
        <div className='form-first-name'>
            <h5>Email Address<span>*</span></h5>
            <input className='Firstname-input'
             type='email' 
             name='email'
             onChange={handleChange}
             placeholder='Email Address'
             value={formData.email}>
             </input>
             {errors.email && <span className='errors'>{errors.email}</span>}
        </div>
      </div>
      <button className='Register-student-green-btn' type="submit">REGISTER STUDENT</button>
      
      {showDetails && (
        <section className='p-sec-2'>
          <div className='sec-2-first'>
            <p>Welcome to the Application on {formData.firstname} {formData.lastname}</p>
          </div>
          <div className='sec-2-second'>
            <div className='stu-details'>
              <h4>Name</h4>
              <p>{formData.firstname} {formData.lastname}</p>
            </div>
            <div className='stu-details'>
              <h4>Email</h4>
              <p>{formData.email}</p>
            </div>
            <div className='stu-details'>
              <h4>Phone</h4>
              <p>{formData.mobileNumber}</p>
            </div>
            {/* Add other fields as needed */}
          </div>
        </section>
      )}
    </form>
  );
}

export default FormShow;
