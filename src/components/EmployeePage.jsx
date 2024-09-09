import React from "react";
import Header from "../Components/Header";
import { IoMdContact } from "react-icons/io";
import Info from "../Components/Info";

function EmployeePage() {
  const employeeInfo = [
    { desc: "Call Office", info: "718-000-0002" },
    { desc: "Call Mobile", info: "617-000-0002" },
    { desc: "SMS", info: "617-000-0002" },
    { desc: "Email", info: "jtaylor@fakemail.com" },
  ];
  return (
    <div className="w-full">
      <Header heading={"Employee"} arrow={true} />
      <div className="border rounded-md mt-2 ">
        <div className=" border flex items-center p-2">
          <IoMdContact className="w-20 h-20" />
          <div>
            <p className="font-medium text-lg">Julie Taylor</p>
            <p className="text-sm">VP of Marketing</p>
          </div>
        </div>
        {employeeInfo.map((employee) => (
          <Info desc={employee.desc} info={employee.info} />
        ))}
      </div>
    </div>
  );
}

export default EmployeePage;
