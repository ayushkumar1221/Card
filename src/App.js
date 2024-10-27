import React, { useEffect, useState } from "react";
import "./index.css";

import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
// import Card from "./Components/Card";
import { apiUrl, filterData } from "./data";
import Spiner from "./Components/Spiner";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);

  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState(filterData[0].title);

  // CREATE A FUNCTION FOR CALLING API

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      // outPut ->

      setCourses(output.data);
    } catch (error) {
      toast.error("Network Issue");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-div">
      <div>
        <Navbar />
      </div>

      <div className="whole-background">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="all-in-center">
          {loading ? (
            <Spiner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
