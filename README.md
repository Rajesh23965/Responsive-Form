# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

**1. Ward Number Validation:**
  
   if (
  formData.permanentAddress.ward < 1 || formData.permanentAddress.ward > 32 ||
  formData.temporaryAddress.ward < 1 || formData.temporaryAddress.ward > 32
) {
  alert('Ward number must be between 1 and 32');
  return;
}

**2.Handling Streams:**

const handleChange = (e) => {
  setProgram(e.target.value);
  setFormData({ ...formData, stream: "" });  // Reset stream when program changes
};
**3.Copy Address Checkbox:**

const handleSameAddress = () => {
  setIsSameAddress(!isSameAddress);
  if (!isSameAddress) {
    setFormData({
      ...formData,
      temporaryAddress: { ...formData.permanentAddress }
    });
  } else {
    setFormData({
      ...formData,
      temporaryAddress: { program: '', district: '', municipality: '', ward: '' }
    });
  }
};

**4.Submit Action:**

const handleSubmit = (e) => {
  e.preventDefault();

  // Ward validation
  if (
    formData.permanentAddress.ward < 1 || formData.permanentAddress.ward > 32 ||
    formData.temporaryAddress.ward < 1 || formData.temporaryAddress.ward > 32
  ) {
    alert('Ward number must be between 1 and 32');
    return;
  }

  // Handle form submission
  console.log('Form Data:', formData);

  // You can send the form data to the backend using Axios or Fetch
  // axios.post('/submit', formData)
};

Screenshot



![FirstPic](https://github.com/user-attachments/assets/5e2a2313-87ac-47e5-874b-75b3e822bdbc)
![Full](https://github.com/user-attachments/assets/d69caff1-3237-44cf-8707-220866560f53)
