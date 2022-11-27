import React,{useContext, useState} from "react";
import { BiSort } from "react-icons/bi";
import { AuthContext } from "../contexts/AuthProvider";

const TableComponent = ({ firstTable }) => {
  const {setNormalState,normalState}=useContext(AuthContext)
  const [firstTableState,setFirstTableState]=useState(true)
  const [secondTableState,setSecondTableState]=useState(true)
  const [thirdTableState,setThirdTableState]=useState(true)
  
  const handlesort = () => {
    console.log("hellow");
  };
  const handleNameSort = () => {
     
      console.log("hellow");
     setFirstTableState(false)
   
    
  };
  const handleEmailSort = () => {
    console.log("hellow");
    setSecondTableState(false)
  };
  const handleDateSort = () => {
    console.log("hellow");
    setThirdTableState(false)
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
             { secondTableState ? <th className="flex ">
                Name{" "}
                <button onClick={handleNameSort} className="mx-2">
                  <BiSort></BiSort>
                </button>
              </th> : <></> }
             { firstTableState && secondTableState ? <th>
                City{" "}
                <button onClick={handlesort} className="mx-2">
                  <BiSort ></BiSort>
                </button>
              </th> :<></>  }
             {thirdTableState ? <th>
                Email Address{" "}
                <button onClick={handleEmailSort} className="mx-2">
                  <BiSort></BiSort>
                </button>
              </th> :<></> }
             {
              firstTableState ? <th>
                Joining Date{" "}
                <button onClick={handleDateSort} className="mx-2">
                  <BiSort></BiSort>
                </button>
              </th>: <></>  
             }
              <th>
                Role{" "}
                <button onClick={handlesort} className="mx-2">
                  <BiSort></BiSort>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {firstTable?.map((tabData) => (
              <tr key={Math.random()}>
               {secondTableState  ?   <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{tabData?.person.name}</div>
                    </div>
                  </div>
                </td> :<></> }
                {firstTableState && secondTableState ?  <td>{tabData?.city}</td> : <></>  }
                {thirdTableState ?<td>{tabData?.email}</td> :<></>}
                {firstTableState ? 
                  <td>{tabData?.joiningDate}</td> :<></> }
                <td>{tabData?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
