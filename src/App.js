import "./App.css";
import Search from "././comps/Search-missing";
import Navbar from "././comps/Navbar";
import NewMissing from './comps/New-missing';
import Info from './comps/Info'
import { useState, useEffect } from "react";

function App() {
  const [showAdd,setShowAdd]=useState(false);
  const showAddfunc = (data) => {
    setShowAdd(data);
  };
  const [showInfo,setShowInfo]=useState(false);
  const showInfofunc = (data) => {
    setShowInfo(data);
  };

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
        const people= data.map((item) => {
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

  return (
    <div className="App">
      <Navbar showAdd={showAddfunc} showInfo={showInfofunc}/>
      {showAdd && <NewMissing/>}
      {!showAdd &&!showInfo && <Search people={persons}/>}
      {showInfo && <Info/>}      
    </div>
  );
}

export default App;
