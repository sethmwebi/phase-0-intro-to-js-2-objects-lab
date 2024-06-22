// Write your solution in this file!
const employee = {
  name: "Seth",
  streetAddress: "123 Mombasa Rd",
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return {
    ...employee,
    [key]: value,
  };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
  const updatedEmployeeDetail = { ...employee };
  delete updatedEmployeeDetail[key];
  return updatedEmployeeDetail;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};
