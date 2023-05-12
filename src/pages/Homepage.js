import React from 'react';
import Navbar from '../components/Navbar';
import EmployeeList from '../components/EmployeeList';

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <h1 className="text-center mb-6 font-bold text-3xl uppercase">Employee list page</h1>
        <EmployeeList />
      </div>
    </>
  );
}

export default Homepage;
