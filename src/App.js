import "./App.css";
import Search from "././comps/Search-missing";
import Navbar from "././comps/Navbar";
import Modal from "./comps/Modal";
import { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalfunc = (open) => {
    setShowModal(open);
  };

  const [clickedButton, setClickedButton] = useState({});
  const clickedButtonFunc = (button) => {
    setClickedButton(button);
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
      <Navbar showModal={showModalfunc} clickedButton={clickedButtonFunc} />
      {showModal && (
        <Modal showModal={showModalfunc} clickedButton={clickedButton} />
      )}
      <Search people={persons}/>
    </div>
  );
}

export default App;
