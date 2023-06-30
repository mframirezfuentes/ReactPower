import React from "react";
import {Button} from 'react-bootstrap'

function MyButton({nameOfButton, onClick }) {

   return(
    <Button variant="primary" onClick={onClick}>{nameOfButton}</Button>
   )
}

export default MyButton;
