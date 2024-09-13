import { useState } from 'react';


const Form = () => {
  //State management
  const [program, setProgram] = useState("");
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender:'',
    stream: '',
    schoolName: '',
    schoolDistrict: '',
    schoolMunicipality: '',
    ward: '',
    gpa: '',
    majorSubject: '',
    transportation: '',
    permanentAddress: {
      program: '',
      district: '',
      municipality: '',
      ward: ''
    },
    temporaryAddress: {
      program: '',
      district: '',
      municipality: '',
      ward: ''
    }
  });

  const handleChange = (e) => {
    setProgram(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (e, addressType) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [addressType]: {
        ...formData[addressType],
        [name]: value
      }
    });
  };

  const handleSameAddress = () => {
    setIsSameAddress(!isSameAddress);
    if (!isSameAddress) {
      setFormData({
        ...formData,
        temporaryAddress: { ...formData.permanentAddress }
      });
    }
  };

  const handleCheckboxhange = (e) => {
    setFormData({ ...formData, transportation: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (
      (formData.permanentAddress.ward < 1 && formData.permanentAddress.ward > 32) ||
      (formData.temporaryAddress.ward < 1 && formData.temporaryAddress.ward > 32)
    ) {
      alert('Ward number must be between 1 and 32');
      return;
    }
    
   
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-center text-3xl font-bold text-green-600 mb-8">
        <h1>Admission Form for Grade XI and Bachelor's Degree</h1>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Details:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
  <input 
    type="text" 
    name="name"
    placeholder="Enter your name" 
    className="p-2 border border-gray-300 rounded-lg w-full md:w-60" 
    value={formData.name}
    onChange={handleInputChange}
  />
  <input 
    type="date" 
    name="dateOfBirth"
    className="p-2 border border-gray-300 rounded-lg w-full md:w-60" 
    value={formData.dateOfBirth}
    onChange={handleInputChange}
  />
  <select 
    name="gender"
    value={formData.gender} 
    onChange={handleInputChange} 
    className="p-2 border border-gray-300 rounded-lg w-full md:w-60"
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="others">Others</option>
  </select>
</div>

        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Program:</h3>
          <select 
            value={program} 
            onChange={handleChange} 
            className="p-2 border border-gray-300 rounded-lg w-full mb-4"
          >
            <option value="">Select program</option>
            <option value="Class XI">Class XI</option>
            <option value="Bachelor Degree">Bachelor Degree</option>
          </select>
          
          {program === "Class XI" && (
            <select 
              name="stream" 
              className="p-2 border border-gray-300 rounded-lg w-full"
              onChange={handleInputChange}
            >
              <option value="">Select Stream</option>
              <option value="Science">Science</option>
              <option value="Management">Management</option>
              <option value="Science">Law</option>
              <option value="Management">Education</option>
              <option value="Management">Humanities </option>
            </select>
          )}
           {program === "Bachelor Degree" && (
            <select 
              name="stream" 
              className="p-2 border border-gray-300 rounded-lg w-full"
              onChange={handleInputChange}
            >
              <option value="">Select Stream</option>
              <option value="Science">BA/BSW</option>
              <option value="Management">BBS</option>
              <option value="Management">Social work</option>
              <option value="Management">Journalism</option>
              <option value="Management">English</option>
            </select>
          )}
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Address:</h3>
          <div className="mb-4">
            <p className="font-semibold text-gray-700 mb-2">Permanent Address:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <select 
                name="program" 
                value={formData.permanentAddress.program} 
                onChange={(e) => handleAddressChange(e, 'permanentAddress')} 
                className="p-2 border border-gray-300 rounded-lg w-full p mb-4"
              >
                <option value="">Select province</option>
                <option value="Koshi">Koshi</option>
                <option value="Madhesh">Madhesh</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Karnali">Karnali</option>
                <option value="Sudurpashchim">Sudurpashchim</option>
              </select>
              <input 
                type="text" 
                name="district"
                placeholder="Enter your district name" 
                className="p-2 border border-gray-300 rounded-lg w-full mb-4" 
                value={formData.permanentAddress.district}
                onChange={(e) => handleAddressChange(e, 'permanentAddress')}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="municipality"
                placeholder="Rural Municipality/Municipality" 
                className="p-2 border border-gray-300 rounded-lg w-full" 
                value={formData.permanentAddress.municipality}
                onChange={(e) => handleAddressChange(e, 'permanentAddress')}
              />
              <input 
                type="number" 
                name="ward"
                placeholder="Ward Number" 
                className="p-2 border border-gray-300 rounded-lg w-full" 
                value={formData.permanentAddress.ward}
                onChange={(e) => handleAddressChange(e, 'permanentAddress')}
                min="1"
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-gray-700 mb-2">Temporary Address:</p>
            <div className="flex items-center mb-4">
              <input 
                type="checkbox" 
                id="same-address-checkbox" 
                className="mr-2"
                checked={isSameAddress}
                onChange={handleSameAddress} 
              />
              <label htmlFor="same-address-checkbox" className="text-gray-700">Same as Permanent Address</label>
            </div>
            {!isSameAddress && (
              <>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select 
                    name="program" 
                    value={formData.temporaryAddress.program} 
                    onChange={(e) => handleAddressChange(e, 'temporaryAddress')} 
                    className="p-2 border border-gray-300 rounded-lg w-full mb-4"
                  >
                    <option value="">Select province</option>
                    <option value="Koshi">Koshi</option>
                    <option value="Madhesh">Madhesh</option>
                    <option value="Lumbini">Lumbini</option>
                    <option value="Bagmati">Bagmati</option>
                    <option value="Gandaki">Gandaki</option>
                    <option value="Karnali">Karnali</option>
                    <option value="Sudurpashchim">Sudurpashchim</option>
                  </select>
                  <input 
                    type="text" 
                    name="district"
                    placeholder="Enter your district name" 
                    className="p-2 border border-gray-300 rounded-lg w-full mb-4" 
                    value={formData.temporaryAddress.district}
                    onChange={(e) => handleAddressChange(e, 'temporaryAddress')}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="municipality"
                    placeholder="Rural Municipality/Municipality" 
                    className="p-2 border border-gray-300 rounded-lg w-full" 
                    value={formData.temporaryAddress.municipality}
                    onChange={(e) => handleAddressChange(e, 'temporaryAddress')}
                  />
                  <input 
                    type="number" 
                    name="ward"
                    placeholder="Ward Number..." 
                    className="p-2 border border-gray-300 rounded-lg w-full" 
                    value={formData.temporaryAddress.ward}
                    onChange={(e) => handleAddressChange(e, 'temporaryAddress')}
                    min="1"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mb-6">
          <p className="font-semibold text-gray-700 mb-2">Requirement For XI and Bachelor Degree:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Program:</label>
              <p className="text-gray-600">SEE/SLC:</p>   
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Name of School:</label>
              <input 
                type="text" 
                name="schoolName"
                className="p-2 border border-gray-300 rounded-lg w-full" 
                value={formData.schoolName}
                onChange={handleInputChange}
                placeholder="Enter your school name" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">District:</label>
              <input 
                type="text" 
                name="schoolDistrict"
                placeholder="Enter your district name" 
                className="p-2 border border-gray-300 rounded-lg w-full" 
                value={formData.schoolDistrict}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Rural Municipality/Municipality:</label>
              <input 
                type="text" 
                name="schoolMunicipality"
                placeholder="Rural Municipality/Municipality" 
                className="p-2 border border-gray-300 rounded-lg w-full" 
                value={formData.schoolMunicipality}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Ward:</label>
              <input 
                type="number" 
                name="ward"
                placeholder="Ward Number" 
                className="p-2 border border-gray-300 rounded-lg w-full" 
                value={formData.ward}
                onChange={handleInputChange}
                min="1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">GPA/Percentage:</label>
              <input 
                type="text" 
                name="gpa"
                placeholder="Enter Your GPA" 
                className="p-2 border border-gray-300 rounded-lg w-full" 
                value={formData.gpa}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Major Subject:</label>
              <input 
                type="text" 
                name="majorSubject"
                placeholder="Enter your major subject" 
                className="p-2 border border-gray-300 rounded-lg w-full" 
                value={formData.majorSubject}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <p className="block text-gray-700">Transportation Facility:</p>
              <div className="flex items-center">
  <input 
    id="transportation-required" 
    type="checkbox" 
    name="transportation"
    value="Required"
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
    checked={formData.transportation === "Required"}
    onChange={handleCheckboxhange}
  />
  <label htmlFor="transportation-required" className="ms-2 text-sm font-medium text-gray-900">Required</label>
</div>

<div className="flex items-center mt-2">
  <input 
    id="transportation-not-required" 
    type="checkbox" 
    name="transportation"
    value="Not Required"
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
    checked={formData.transportation === "Not Required"}
    onChange={handleCheckboxhange}
  />
  <label htmlFor="transportation-not-required" className="ms-2 text-sm font-medium text-gray-900">Not Required</label>
</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            type="submit" 
            className=" w-full px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </div> 
      </form>
    </div>
  );
};

export default Form;
