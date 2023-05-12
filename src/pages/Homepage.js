import React from 'react';
import Navbar from '../components/Navbar';
import EmployeeList from '../components/EmployeeList';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <h1 className="text-center mb-6 font-bold md:text-3xl text-2xl uppercase">Employee list page</h1>
        <div className="flex justify-end mr-6 mb-4">
          <Link to="/" role="button" className="btn btn-success btn-md gap-2">
            <FaPlus /> New
          </Link>
        </div>
        <EmployeeList />
      </div>
    </>
  );
}

export default Homepage;
