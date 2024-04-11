import React, { useState } from 'react';
import './Tabs.css'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here...

    // Optionally, you can reset form fields
    event.target.reset();
    handleTabClick('tab2')

    // Reset submitted state to enable tab switching
  };
  const handleSubmit2 = (event)=>{
    event.preventDefault();
    event.target.reset();
    handleTabClick('tab3')
  }
  const handleSubmit3 = (event)=>{
    event.preventDefault();
    event.target.reset();
    handleTabClick('tab4')
  }
  const handleSubmit4 = (event)=>{
    event.preventDefault();
    event.target.reset();
    handleTabClick('tab1')
  }
  

  return (
    <div>
         {/* <section className='p-sec-3'>
              <div className='info-category'>
                <p>Personal Information</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'>
                <p>Academic Qualification</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'>
                <p>Work Experience</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'>
                <p>Tests</p>
                <p>Incomplete</p>
              </div>
            </section> */}
      {/* <form >
        <div className="tab-buttons">
          <button onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>Tab 1</button>
          <button onClick={() => handleTabClick('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>Tab 2</button>
          <button onClick={() => handleTabClick('tab3')} className={activeTab === 'tab3' ? 'active' : ''}>Tab 3</button>
        </div>
        </form> */}

        <div className="tab-content">
          {activeTab === 'tab1' && <div> 
            <form onSubmit={handleSubmit}>
            <section className='p-sec-3'>
              <div className='info-category'>
                <p>Personal Information</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'>
                <p>Academic Qualification</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'>
                <p>Work Experience</p>
                <p>Optional</p>
              </div>
              <div className='info-category'>
                <p>Tests</p>
                <p>Incomplete</p>
              </div>
            </section>
                <>input 1</>
                <input type='text'></input>
                <button type="submit">Submit 1</button>
            </form></div>}
          {activeTab === 'tab2' && <div>
            <form onSubmit={handleSubmit2}>
            <section className='p-sec-3'>
              <div className='info-category'>
                <p>Personal Information</p>
                <p>completed</p>
              </div>
              <div className='info-category'>
                <p>Academic Qualification</p>
                <p>Incomplete</p>
              </div>
              <div className='info-category'>
                <p>Work Experience</p>
                <p>Optional</p>
              </div>
              <div className='info-category'>
                <p>Tests</p>
                <p>Incomplete</p>
              </div>
            </section>
                <>input 2</>
                <input type='text'></input>
                <button type="submit">Submit 2</button>
            </form>
            </div>}
          {activeTab === 'tab3' && <div>
             <form  onSubmit={handleSubmit3}>
             <section className='p-sec-3'>
              <div className='info-category'>
                <p>Personal Information</p>
                <p>completed</p>
              </div>
              <div className='info-category'>
                <p>Academic Qualification</p>
                <p>completed</p>
              </div>
              <div className='info-category'>
                <p>Work Experience</p>
                <p>Optional</p>
              </div>
              <div className='info-category'>
                <p>Tests</p>
                <p>Incomplete</p>
              </div>
            </section>
          <>input 3</>
                <input type='text'></input>
                <button type="submit">Submit 3</button>
            </form>
            </div>}
            {activeTab === 'tab4' && <div>
             <form  onSubmit={handleSubmit4}>
             <section className='p-sec-3'>
              <div className='info-category'>
                <p>Personal Information</p>
                <p>completed</p>
              </div>
              <div className='info-category'>
                <p>Academic Qualification</p>
                <p>completed</p>
              </div>
              <div className='info-category'>
                <p>Work Experience</p>
                <p>Optional</p>
              </div>
              <div className='info-category'>
                <p>Tests</p>
                <p>Incompleted</p>
              </div>
            </section>
          <>input 4</>
                <input type='text'></input>
                <button type="submit">Submit 4</button>
            </form>
            </div>}
        </div>
        
      
      {/* Display a message indicating form submission */}
    </div>
  );
};

export default Tabs;
