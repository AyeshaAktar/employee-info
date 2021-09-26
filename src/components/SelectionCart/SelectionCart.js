import React from "react";

const SelectionCart = (props) => {
  const selectEmployee = props.selectEmployee;
  let totalSalary = 0;
  for (let i = 0; i < selectEmployee.length; i++) {
    const employee = selectEmployee[i];
    const salary = employee.salary;
    totalSalary = totalSalary + salary;
  }
  let count = 1;
  return (
    <div>
      <h4>Total Select: {selectEmployee.length}</h4>
      <h4>Total Salary: {totalSalary}</h4>

      {selectEmployee.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {selectEmployee.map((employee) => (
              <tr key={employee.id}>
                <th scope="row">{count++}</th>
                <td>{employee.name}</td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectionCart;
