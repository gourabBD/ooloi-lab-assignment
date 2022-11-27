import React,{useContext, useState} from "react";
import { BiSort } from "react-icons/bi";
import { AuthContext } from "../contexts/AuthProvider";

const Alternative = ({firstTable}) => {

  const {setNormalState,normalState}=useContext(AuthContext)
    
    const handlesort = () => {
     setNormalState(false)
    };
   
    return (
        <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
             <th className="flex ">
                Name{" "}
                <button onClick={handlesort} className="mx-2">
                  <BiSort></BiSort>
                </button>
              </th> 
              <th>
                City{" "}
                <button onClick={handlesort} className="mx-2">
                  <BiSort ></BiSort>
                </button>
              </th> 
              <th>
                Email Address{" "}
                <button onClick={handlesort} className="mx-2">
                  <BiSort></BiSort>
                </button>
              </th> 
              <th>
                Joining Date{" "}
                <button onClick={handlesort} className="mx-2">
                  <BiSort></BiSort>
                </button>
              </th> 
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
                <td>
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
                </td>
               <td>{tabData?.city}</td>
               <td>{tabData?.email}</td>
              
                  <td>{tabData?.joiningDate}</td>
                <td>{tabData?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Alternative;