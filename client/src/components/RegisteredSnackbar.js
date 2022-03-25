import React, { useState } from "react";



export default function RegisteredSnackbar(props) {


return (

    <Snackbar
    open={props.}
    autoHideDuration={2000}
    message="I love snacks"
    key={'bottom' + 'center'}
    onClose={handleClose}
  />
);

}