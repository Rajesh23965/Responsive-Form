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

![Full](https://github.com/user-attachments/assets/ea1b89ea-52a5-4ffb-adc6-736166493f8b)

![FirstPic](https://github.com/user-attachments/assets/fdf2be9d-7c5c-4da9-9ee3-c15ac71d6722)
![SecondPic](https://github.com/user-attachments/assets/bdca72f3-4ab7-46cb-a9f1-b2b623dcf9c4)

![LastPic](https://github.com/user-attachments/assets/91c6da48-f78b-4775-9570-b8b22b5aa808)


