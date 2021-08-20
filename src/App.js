import "./App.css";
import Search from "././comps/Search-missing";
import Navbar from "././comps/Navbar";
import NewMissing from "./comps/New-missing";
import Info from "./comps/Info";
import Login from "./comps/authForms";
import { useState, useEffect } from "react";

function App() {
  // fetch api
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        const people = data.map((item) => {
          return {
            first_name: item.first_name,
            last_name: item.last_name,
            age: item.age,
            city: item.city,
            circumstance: item.circumstance,
          };
        });
        setPersons(people);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  const [selectedBtn, setSelectedBtn] = useState("search");
  const selectedBtnFunc = (data) => {
    setSelectedBtn(data);
  };

  const addPeopleFunc = (data) => {
    setPersons([...persons, data])
  };

  return (
    <div className="App">
      <Navbar selectedBtnNav={selectedBtnFunc} />
      {selectedBtn === "search" && <Search people={persons} />}
      {selectedBtn === "add" && <NewMissing addPeopleFunc={addPeopleFunc} />}
      {selectedBtn === "info" && <Info />}
      {selectedBtn === "login" && <Login />}
    </div>
  );
}

export default App;
