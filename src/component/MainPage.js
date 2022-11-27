import React, { useContext, useState } from "react";
import TableComponent from "./TableComponent";
import { useEffect } from "react";
import Alternative from "./Alternative";
import { AuthContext } from "../contexts/AuthProvider";

const MainPage = () => {
  const [firstTable, setFirstTable] = useState([]);
  const {setNormalState,normalState}=useContext(AuthContext)
  useEffect(() =>{
		fetch("Tabledata.json")
			.then((response) => response.json())
			.then((data) => setFirstTable(data))
	},[])
 

  return (
    <div className="App p-10">
      <div className="my-10 p-10 bg-zinc-800">

     
        
          <TableComponent firstTable={firstTable}  ></TableComponent>
          {/* {normalState ? <Alternative firstTable={firstTable}></Alternative> : } */}
          
          
      </div>

     
    </div>
  );
};

export default MainPage;
