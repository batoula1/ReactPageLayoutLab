import React from "react";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import EmployeeList from "../Components/EmployeeList";

function HomePage() {
  return (
    <div className="w-full">
      <Header heading={"Employee Directory"} />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default HomePage;
