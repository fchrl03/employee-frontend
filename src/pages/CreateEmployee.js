import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Swal from 'sweetalert2';
import { getInitialData } from '../utils';
import { useNavigate } from 'react-router-dom';

function CreateEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [phone, setPhone] = useState('');
  const [existingEmployees] = useState(getInitialData());
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Perform validation checks
    if (!firstName || !lastName || !email) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return;
    }

    // Perform uniqueness check for email
    // Assuming you have an array of existing employees called 'existingEmployees'
    const isEmailUnique = !existingEmployees.some((employee) => employee.email === email);
    if (!isEmailUnique) {
      Swal.fire('Error', 'Email must be unique.', 'error');
      return;
    }

    // Perform maximum character length check
    const maxCharacterLength = 25;
    if (firstName.length > maxCharacterLength || lastName.length > maxCharacterLength) {
      Swal.fire('Error', `First name and last name must not exceed ${maxCharacterLength} characters.`, 'error');
      return;
    }

    // If all validations pass, create the data
    const newEmployee = {
      id: Date.now(), // Generate a unique ID for the new employee
      firstName,
      lastName,
      email,
    };

    existingEmployees.push(newEmployee);

    Swal.fire('Success', 'Employee created successfully!', 'success');
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center mt-10 mb-6 font-bold md:text-3xl text-2xl uppercase">Create Employees</h1>

      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required maxLength={25} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required maxLength={25} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={100} />

      <button onClick={handleSubmit}>Create</button>
    </>
  );
}

export default CreateEmployee;
