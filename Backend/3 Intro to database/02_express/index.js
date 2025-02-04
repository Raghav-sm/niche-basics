import express from 'express';

const app = express();
const port = 3000;

app.use(express.json()); // only accept JSON data

const employees = []; // array of employee objects
let nextID = 1;

// Add employee data
app.post('/details', (req, res) => {
  const { name, salary } = req.body;
  const newEmployee = {
    id: nextID++,
    name,
    salary,
  };
  employees.push(newEmployee);
  res.status(202).send(newEmployee);
});

// Get employee data
app.get('/details', (req, res) => {
  res.status(202).send(employees);
});

// Search an employee by ID
app.get('/details/:id', (req, res) => {
  const getEmployee = employees.find((e) => parseInt(req.params.id) === e.id);
  if (!getEmployee) {
    return res.status(404).send('Employee not found');
  }
  res.status(202).send(getEmployee);
});

// Modify an employee detail
app.put('/details/:id', (req, res) => {
  let employee = employees.find((e) => e.id === parseInt(req.params.id));
  if (!employee) {
    return res.status(404).send('Employee not found to modify.');
  }
  const { name, salary } = req.body;
  employee.name = name;
  employee.salary = salary;
  res.status(202).send(employee);
});

// Start server
app.listen(port, () => {
  console.log(`ExpressJS, we are listening at port ${port}.`);
});
