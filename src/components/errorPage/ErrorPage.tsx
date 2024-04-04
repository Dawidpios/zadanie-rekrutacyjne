import React from "react";
import { Button } from "@mui/material";

const ErrorPage = () => {

  const refreshHandler= () => {
    window.location.reload()
  }

  return ( 
    <div>
      <h1>Oops, something went wrong</h1>
      <Button onClick={refreshHandler}>Refresh</Button>
    </div>
   );
}
 
export default ErrorPage;