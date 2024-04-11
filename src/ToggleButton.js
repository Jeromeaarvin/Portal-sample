import React, { useState } from 'react';
import Switch from 'react-input-switch';

function ToggleButton() {
    const [toggleData, setToggleData] = useState({
        immigrationToggle: false,
        otherToggle: false,
        // Add more toggle buttons here as needed
    });

    const handleToggleChange = (toggleName, value) => {
        setToggleData(prevToggleData => ({
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

    return (
        <div>
            <p>Toggle Buttons</p>
            <Switch 
                on="yes" 
                off="no" 
                value={toggleData.immigrationToggle ? 'yes' : 'no'} 
                onChange={(value) => handleToggleChange('immigrationToggle', value)} 
            />
            <Switch 
                on="yes" 
                off="no" 
                value={toggleData.otherToggle ? 'yes' : 'no'} 
                onChange={(value) => handleToggleChange('otherToggle', value)} 
            />
            {/* Add more Switch components for additional toggle buttons */}
        </div>
    );
}

export default ToggleButton;
