import React from "react";
import employeePic from "../assets/profile.png";

const EmployeeListItem = ({ employeeList }) => {
  return employeeList.map((value, index) => (
    <div
      key={index}
      className="text-left flex m-4 space-x-3 border border-gray-600 p-3"
    >
      <img src={employeePic} className="h-10" />
      <div>
        <h5 className="font-bold">{value.eName}</h5>
        <p className="text-gray-500">{value.occupation}</p>
      </div>
    </div>
  ));
};

export default EmployeeListItem;
