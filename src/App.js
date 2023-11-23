import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [formData, setFormData] = useState(null);

  const handleSave = (data) => {
    // Validation logic goes here

    // Save data to the database (backend integration needed)
    // Simulating storage for now
    setFormData(data);
  };

  return (
    <div>
      <h1>React SPA</h1>
      <Form onSave={handleSave} initialData={formData} />
      <Display data={formData} />
    </div>
  );
}

export default App;
