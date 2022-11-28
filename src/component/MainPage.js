import React, { useContext } from "react";
import TableComponent from "./TableComponent";
import { useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const MainPage = () => {
  
  const {setNormalState,normalState}=useContext(AuthContext)
  useEffect(() =>{
		fetch("Tabledata.json")
			.then((response) => response.json())
			.then((data) => setNormalState(data))
	},[setNormalState])
 

  return (
    <div className="App p-10">
      <div className="my-10 p-10 bg-zinc-50">

     
        
          <TableComponent setNormalState={setNormalState} normalState={normalState}  ></TableComponent>
         
          
          
      </div>

     
    </div>
  );
};

export default MainPage;
