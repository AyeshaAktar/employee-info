import React from "react";
import "./EmployeeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const EmployeeCard = (props) => {
  const { name, employeeId, age, workAs, country, salary, img } =
    props.singleEmployee;
  const handleSelectBtn = props.handleSelectBtn;
  return (
    <div className="col">
      <div className="card shadow">
        <img
          src={img}
          className="card-img-top img-fluid employee-img"
          alt="..."
        />
        <div className="card-body text-start">
          <h5 className="card-title">
            <strong>Name:</strong> {name}
          </h5>
          <p>
            <strong>Age:</strong>
            {age}
          </p>
          <p>
            <strong>Work As:</strong>
            {workAs}
          </p>
          <p>
            <strong>Salary:</strong>
            {salary}
          </p>
          <p>
            <strong>Country:</strong>
            {country}
          </p>
          <p>
            <strong>Employee Id</strong>
            {employeeId}
          </p>
          <button
            onClick={() => handleSelectBtn(props.singleEmployee)}
            className="btn select-btn px-4"
          >
            <FontAwesomeIcon icon={faUserPlus} />
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
