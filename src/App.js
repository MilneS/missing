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
        setPersons(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  useEffect(() => {
    console.log(persons);
  }, [persons]);

  return (
    <div className="App">
      <Navbar showModal={showModalfunc} clickedButton={clickedButtonFunc} />
      {showModal && (
        <Modal showModal={showModalfunc} clickedButton={clickedButton} />
      )}
      <Search />
    </div>
  );
}

export default App;
