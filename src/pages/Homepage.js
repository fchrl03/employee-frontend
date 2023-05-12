import React from 'react';
import Navbar from '../components/Navbar';
import EmployeeList from '../components/EmployeeList';

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <EmployeeList />
      </div>
    </>
  );
}

export default Homepage;
