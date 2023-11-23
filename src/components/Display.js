const Display = ({ formData }) => {
    if (!formData) {
        return <div className="container mx-auto p-4">No data to display.</div>;
    }
  
    return (
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Display Data</h2>
          <p>Name: {formData.name}</p>
          <p>Sectors: {formData.sectors.join(', ')}</p>
          <p>Agree to terms: {formData.agree ? 'Yes' : 'No'}</p>
        </div>
      );
    };

export default Display;