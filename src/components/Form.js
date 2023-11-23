import React, { useState } from 'react';

const sectorsData = [
  "Manufacturing",
  "   Construction materials",
  "   Electronics and Optics",
  "   Food and Beverage",
  "      Bakery & confectionery products",
  // ... (other sectors)
  "Transport and Logistics",
  "   Air",
  "   Rail",
  "   Road",
  "   Water",
];

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    sectors: [],
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else if (type === 'select-multiple') {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData((prevData) => ({ ...prevData, [name]: selectedOptions }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSave = () => {
    // Perform validation here
    // Save data to the database or perform other actions
    console.log('Form Data:', formData);
  };

  return (
    <div className="container mx-auto p-4">
      <p>Please enter your name and pick the sectors you are currently involved in.</p>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <br />

      <label>
        Sectors:
        <select
          multiple
          size="5"
          name="sectors"
          value={formData.sectors}
          onChange={handleChange}
        >
          {sectorsData.map((sector, index) => (
            <option key={index} value={index + 1}>
              {sector}
            </option>
          ))}
        </select>
      </label>

      <br />

      <label>
        <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
        Agree to terms
      </label>

      <br />

      <button type="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Form;
