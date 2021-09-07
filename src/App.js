import "./App.css";
import Search from "././comps/Search-missing";
import Navbar from "././comps/Navbar";
import NewMissing from "./comps/New-missing";
import { useState, useEffect } from "react";

function App() {
  // fetch api
  const [persons, setPersons] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState("search");

  useEffect(() => {
    const fetchUser=async()=>{
    const response = await fetch('./api.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const responseData = await response.json();
        const people = responseData.map((item) => {
          return {
            first_name: item.first_name,
            last_name: item.last_name,
            age: item.age,
            city: item.city,
            circumstance: item.circumstance,
          };
        });
        setPersons(people);
      }
      fetchUser().catch((error) => {});
    },[])

  const selectedBtnFunc = (data) => {
    console.log(data)
    setSelectedBtn(data);
  };
  const addPeopleFunc = (data) => {
    setPersons([...persons, data]);
  };
  

  return (
    <div className="App">
      <Navbar
        selectedBtnNav={selectedBtnFunc}
        selectedBtn={selectedBtn}
      />
      {selectedBtn === "search" && <Search people={persons} />}
      {selectedBtn === "add" && (
        <NewMissing
          addPeopleFunc={addPeopleFunc}
          selectedBtn={selectedBtnFunc}
        />
      )}
    </div>
  );
}

export default App;
