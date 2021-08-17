import "./App.css";
import Search from "././comps/Search-missing";
import Navbar from "././comps/Navbar";
import Modal from "./comps/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalfunc = (open) => {
    setShowModal(open)
  };

  const [clickedButton, setClickedButton]=useState({})
  const clickedButtonFunc=(button)=>{
    setClickedButton(button)
  }

  return (
    <div className="App">
      <Navbar showModal={showModalfunc} clickedButton={clickedButtonFunc}/>
      {showModal && <Modal showModal={showModalfunc} clickedButton={clickedButton}/>}
      <Search />
    </div>
  );
}

export default App;
