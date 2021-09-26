import React, { useEffect, useState } from "react";
import employee from "../../data/employees.json";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import SelectionCart from "../SelectionCart/SelectionCart";
const Employees = () => {
  const [employees, setEmplyees] = useState([]);
  const [selectEmployee, setSelectEmployee] = useState([]);
  useEffect(() => {
    setEmplyees(employee);
  }, []);

  const handleSelectBtn = (singleEmployee) => {
    const totalEmployee = [...selectEmployee, singleEmployee];
    setSelectEmployee(totalEmployee);
  };

  return (
    <div className="employees mt-5 container-fluid">
      <div className="row">
        <div className="col-md-8 border-end">
          <h2>Employee Details</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {employees.map((singleEmployee) => (
              <EmployeeCard
                key={singleEmployee.id}
                singleEmployee={singleEmployee}
                handleSelectBtn={handleSelectBtn}
              ></EmployeeCard>
            ))}
          </div>
        </div>

        <div className="cart-container col-md-4">
          <h3>Selected Employees</h3>
          <div className="mt-4">
            <SelectionCart selectEmployee={selectEmployee}></SelectionCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
