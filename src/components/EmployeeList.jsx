import React from "react";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = () => {
  const employeeList = [
    {
      eName: "James King",
      occupation: "President and CEO",
    },
    {
      eName: "Julie Taylor",
      occupation: "VP of Marketing",
    },
    {
      eName: "Eugene Lee",
      occupation: "CFO",
    },
    {
      eName: "John Williams",
      occupation: "VP of Engineering",
    },
    {
      eName: "Ray Moore",
      occupation: "VP of Sales",
    },
    {
      eName: "Paul Jones",
      occupation: "QA Manager",
    },
  ];

  return (
    <div className="mt-3 border border-gray-600 ">
      <EmployeeListItem employeeList={employeeList} />
    </div>
  );
};

export default EmployeeList;
