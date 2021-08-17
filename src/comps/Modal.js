import classes from "./Modal.module.css";
import { useState, useEffect } from "react";

const Modal = (props) => {
  const modalOpenFunc = () => {
    props.showModal(false);
  };

  const [modalData, setModalData] = useState({});
const effect=useEffect(()=>{
  const button = props.clickedButton;  
  const aboutUs = {
    title: "About Us",
    message:
      'Each year, people are reported as missing after running away, being forced out from homes, or being abducted for sexual, political or criminal purposes. Our website provides tools to report missing persons and comment on profiles to bring any valuable information that could help in the search for our loved ones.',
  };
  const contact = {
    title: "Contact",
    message: "b",
  };
  button === "about" ? setModalData(aboutUs) : setModalData(contact);},[props.clickedButton])


  return (
    <div onClick={modalOpenFunc} className={classes.modal}>
      <div className={classes.modalcontent}>
        <div className={classes.modaltitle}>{modalData.title}</div>
        <div className={classes.modalp}>
          <p>
            {modalData.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
