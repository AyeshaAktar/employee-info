import React, { useEffect, useState } from "react";
import employee from "../../data/employees.json";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import SelectionCart from "../SelectionCart/SelectionCart";
const Employees = () => {
  const [employees, setEmplyees] = useState([]);
  useEffect(() => {
    setEmplyees(employee);
  }, []);

  return (
    <div className="employees mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2>Employee Details</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {employees.map((singleEmployee) => (
              <EmployeeCard
                key={singleEmployee.id}
                singleEmployee={singleEmployee}
              ></EmployeeCard>
            ))}
          </div>
        </div>

        <div className="cart-container col-md-4">
          <h3>Selected Employees</h3>
          <div className="mt-4">
            <SelectionCart></SelectionCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
