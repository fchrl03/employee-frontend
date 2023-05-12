const getInitialData = () => [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    position: 'Manager',
    joinDate: '2022-01-15',
    phone: '1234567890',
    address: [
      {
        id: 1,
        street: '123 Main St',
        city: 'New York',
        province: 'New York',
        zipCode: '10001',
      },
      {
        id: 2,
        street: '456 Elm St',
        city: 'Los Angeles',
        province: 'California',
        zipCode: '90001',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'janesmith@example.com',
    position: 'Supervisor',
    joinDate: '2022-02-20',
    phone: '9876543210',
    address: [
      {
        id: 1,
        street: '789 Oak St',
        city: 'Chicago',
        province: 'Illinois',
        zipCode: '60601',
      },
      {
        id: 2,
        street: '987 Pine St',
        city: 'San Francisco',
        province: 'California',
        zipCode: '94101',
      },
    ],
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michaeljohnson@example.com',
    position: 'Analyst',
    joinDate: '2022-03-10',
    phone: '4567891230',
    address: [
      {
        id: 1,
        street: '456 Oak St',
        city: 'Chicago',
        province: 'Illinois',
        zipCode: '60601',
      },
      {
        id: 2,
        street: '789 Elm St',
        city: 'Los Angeles',
        province: 'California',
        zipCode: '90001',
      },
    ],
  },
  {
    id: 4,
    firstName: 'Emily',
    lastName: 'Brown',
    email: 'emilybrown@example.com',
    position: 'Developer',
    joinDate: '2022-04-05',
    phone: '7891234560',
    address: [
      {
        id: 1,
        street: '987 Pine St',
        city: 'San Francisco',
        province: 'California',
        zipCode: '94101',
      },
      {
        id: 2,
        street: '123 Oak St',
        city: 'Chicago',
        province: 'Illinois',
        zipCode: '60601',
      },
    ],
  },
];

export { getInitialData };
