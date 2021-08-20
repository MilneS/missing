import "./App.css";
import Search from "././comps/Search-missing";
import Navbar from "././comps/Navbar";
import NewMissing from "./comps/New-missing";
import Info from "./comps/Info";
import Login from "./comps/Login";
import { useState, useEffect } from "react";

function App() {
  // fetch api
  const [persons, setPersons] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState("search");
  const [userLoggedin, setUserLoggedin] = useState(false);

  useEffect(() => {
    const fetchUser=async()=>{
    const response = await fetch(process.env.REACT_APP_API)
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
    setSelectedBtn(data);
  };
  const userLoggedinFunc = (data) => {
    setUserLoggedin(data);
  };
  const addPeopleFunc = (data) => {
    setPersons([...persons, data]);
  };

  return (
    <div className="App">
      <Navbar
        selectedBtnNav={selectedBtnFunc}
        userLoggedin={userLoggedin}
        userLoggedinFunc={userLoggedinFunc}
      />
      {selectedBtn === "search" && <Search people={persons} />}
      {selectedBtn === "add" && (
        <NewMissing
          addPeopleFunc={addPeopleFunc}
          selectedBtn={selectedBtnFunc}
        />
      )}
      {selectedBtn === "info" && <Info />}
      {selectedBtn === "login" && (
        <Login loggedinData={userLoggedinFunc} selectedBtn={selectedBtnFunc} />
      )}
      {selectedBtn === "logout" && (
        <Login loggedinData={userLoggedinFunc} selectedBtn={selectedBtnFunc} />
      )}
    </div>
  );
}

export default App;
