import React, { useState } from 'react';
import { getInitialData } from '../utils';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function EmployeeList() {
  const [employees, setEmployees] = useState(getInitialData());
  let [number] = useState(1);

  const handleUpdate = (id) => {
    const employeeToUpdate = employees.find((employee) => employee.id === id);
    if (!employeeToUpdate) {
      Swal.fire('Error', 'Employee does not exist.', 'error');
      return;
    }

    Swal.fire({
      title: 'Update Employee',
      html:
        `<label for="firstName">First Name:</label> <br>` +
        `<input type="text" id="firstName" class="swal2-input" value="${employeeToUpdate.firstName}" placeholder="First Name" maxlength="25" required> <br>` +
        `<label for="lastName">Last Name:</label> <br>` +
        `<input type="text" id="lastName" class="swal2-input" value="${employeeToUpdate.lastName}" placeholder="Last Name" required maxlength="25"> <br>` +
        `<label for="email">Email:</label> <br>` +
        `<input type="email" id="email" class="swal2-input" value="${employeeToUpdate.email}" placeholder="Email" required maxlength="100"> <br>` +
        `<label for="position">Position:</label> <br>` +
        `<input type="text" id="position" class="swal2-input" value="${employeeToUpdate.position}" placeholder="Position" required> <br>` +
        `<label for="joinDate">Join Date:</label> <br>` +
        `<input type="date" id="joinDate" class="swal2-input" value="${employeeToUpdate.joinDate}" placeholder="Join Date" required> <br>` +
        `<label for="phone">Phone:</label> <br>` +
        `<input type="text" id="phone" class="swal2-input" value="${employeeToUpdate.phone}" placeholder="Phone" required>`,
      focusConfirm: false,
      preConfirm: () => {
        const firstName = Swal.getPopup().querySelector('#firstName').value;
        const lastName = Swal.getPopup().querySelector('#lastName').value;
        const email = Swal.getPopup().querySelector('#email').value;
        const position = Swal.getPopup().querySelector('#position').value;
        const joinDate = Swal.getPopup().querySelector('#joinDate').value;
        const phone = Swal.getPopup().querySelector('#phone').value;

        const isEmailUnique = employees.map((employee) => employee.email !== email && employee.id !== id);

        if (!firstName) {
          Swal.showValidationMessage('First Name are required fields.');
          return false;
        }

        if (!lastName) {
          Swal.showValidationMessage('Last Name are required fields.');
          return false;
        }

        if (!email) {
          Swal.showValidationMessage('Email are required fields.');
          return false;
        }

        if (!position) {
          Swal.showValidationMessage('Position are required fields.');
          return false;
        }

        if (!joinDate) {
          Swal.showValidationMessage('Join Date are required fields.');
          return false;
        }

        if (!phone) {
          Swal.showValidationMessage('Phone are required fields.');
          return false;
        }

        if (!isEmailUnique) {
          Swal.showValidationMessage('Email must be unique.');
          return false;
        }

        const updatedEmployees = employees.map((employee) => {
          if (employee.id === id) {
            return { ...employee, firstName, lastName, email, position, joinDate, phone };
          }
          return employee;
        });

        setEmployees(updatedEmployees);
        Swal.fire('Updated!', 'Employee data updated successfully.', 'success');
      },
    });
  };

  const handleDelete = (id) => {
    const employeeExists = employees.some((employee) => employee.id === id);
    if (!employeeExists) {
      Swal.fire('Error', 'Employee does not exist.', 'error');
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this employee.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees(updatedEmployees);
        Swal.fire('Deleted!', 'Employee deleted successfully.', 'success');
      }
    });
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td cols={3} className="text-center">
                  Tidak ada data.
                </td>
              </tr>
            ) : (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{number++}</td>
                  <td>
                    {employee.firstName} {employee.lastName}
                  </td>
                  <td>{employee.email}</td>
                  <td>{employee.position}</td>
                  <td>
                    <Link to={`/details/${employee.id}`} role="button" className="btn btn-info btn-md mr-3">
                      View
                    </Link>
                    <button className="btn btn-warning btn-md mr-3" onClick={() => handleUpdate(employee.id)}>
                      Update
                    </button>
                    <button className="btn btn-error btn-md" onClick={() => handleDelete(employee.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EmployeeList;
