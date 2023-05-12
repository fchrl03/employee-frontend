import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInitialData, getAddressEmployee } from '../utils';
import Navbar from '../components/Navbar';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function DetailEmployee() {
  const [employeeData] = useState(getInitialData());
  const [addressEmployee, setAddressEmployee] = useState(getAddressEmployee());
  let [number] = useState(1);
  const { id } = useParams();

  const foundEmployee = employeeData.find((emp) => emp.id == id);
  const foundIdAddress = addressEmployee.find((data) => data.id_user == id);

  const handleDelete = (id) => {
    const employeeExists = addressEmployee.some((employee) => employee.id === id);
    if (!employeeExists) {
      Swal.fire('Error', 'Address does not exist.', 'error');
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
        const updatedEmployees = addressEmployee.filter((employee) => employee.id !== id);
        setAddressEmployee(updatedEmployees);
        Swal.fire('Deleted!', 'Address deleted successfully.', 'success');
      }
    });
  };

  const handleUpdate = (id) => {
    const employeeToUpdate = addressEmployee.find((employee) => employee.id === id);
    if (!employeeToUpdate) {
      Swal.fire('Error', 'Employee does not exist.', 'error');
      return;
    }

    Swal.fire({
      title: 'Update Employee',
      html:
        `<label for="address">Address:</label> <br>` +
        `<input type="text" id="address" class="swal2-input" value="${employeeToUpdate.street}" placeholder="Address" maxlength="255" required> <br>` +
        `<label for="city">City:</label> <br>` +
        `<input type="text" id="city" class="swal2-input" value="${employeeToUpdate.city}" placeholder="City" required maxlength="100"> <br>` +
        `<label for="province">Province:</label> <br>` +
        `<input type="text" id="province" class="swal2-input" value="${employeeToUpdate.province}" placeholder="Province" required maxlength="100"> <br>` +
        `<label for="zipcode">Zip Code:</label> <br>` +
        `<input type="text" id="zipcode" class="swal2-input" value="${employeeToUpdate.zipCode}" placeholder="Zip Code" required> <br>`,
      focusConfirm: false,
      preConfirm: () => {
        const address = Swal.getPopup().querySelector('#address').value;
        const city = Swal.getPopup().querySelector('#city').value;
        const province = Swal.getPopup().querySelector('#province').value;
        const zipcode = Swal.getPopup().querySelector('#zipcode').value;

        const updatedEmployees = addressEmployee.map((employee) => {
          if (employee.id === id) {
            return { ...employee, address, city, province, zipcode };
          }
          return employee;
        });

        setAddressEmployee(updatedEmployees);
        Swal.fire('Updated!', 'Employee data updated successfully.', 'success');
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="mt-10">
        <h1 className="text-center mb-6 font-bold md:text-3xl text-2xl uppercase">Employee Details</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>First Name</td>
              <td>:</td>
              <td>{foundEmployee.firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>:</td>
              <td>{foundEmployee.lastName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td>{foundEmployee.email}</td>
            </tr>
            <tr>
              <td>Position</td>
              <td>:</td>
              <td>{foundEmployee.position}</td>
            </tr>
            <tr>
              <td>Join Date</td>
              <td>:</td>
              <td>{foundEmployee.joinDate}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>:</td>
              <td>{foundEmployee.phone}</td>
            </tr>
          </tbody>
        </table>
        <div className="overflow-x-auto mt-6">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Address</th>
                <th>City</th>
                <th>Province</th>
                <th>Zipcode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr key={foundIdAddress.id}>
                <td>{number++}</td>
                <td>{foundIdAddress.street}</td>
                <td>{foundIdAddress.city}</td>
                <td>{foundIdAddress.province}</td>
                <td>{foundIdAddress.zipCode}</td>
                <td>
                  <button className="btn btn-warning btn-md mr-3" onClick={() => handleUpdate(foundIdAddress.id)}>
                    Update
                  </button>
                  <button className="btn btn-error btn-md" onClick={() => handleDelete(addressEmployee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DetailEmployee;
