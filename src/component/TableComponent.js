import React, { useContext, useState, useEffect } from "react";
import { BiSort } from "react-icons/bi";
import { AuthContext } from "../contexts/AuthProvider";

const TableComponent = ({ setNormalState, normalState }) => {
  // const { setNormalState, normalState } = useContext(AuthContext);
  const [firstTableState, setFirstTableState] = useState(true);
  const [secondTableState, setSecondTableState] = useState(true);
  const [thirdTableState, setThirdTableState] = useState(true);

  const handlesort = (category) => {
    if (category === "city") {
      const sortedData = [...normalState].sort((a, b) =>
        a?.city > b?.city ? 1 : -1
      );

      setNormalState(sortedData);
    }
    if (category === "role") {
      const sortedData = [...normalState].sort((a, b) =>
        a?.role > b?.role ? 1 : -1
      );

      setNormalState(sortedData);
    }
  };
  //name sorting
  const handleNameSort = (e) => {
    setFirstTableState(false);

    const sortedData = [...normalState].sort((a, b) =>
      a?.person?.name > b?.person?.name ? 1 : -1
    );

    setNormalState(sortedData);
  };
//email sorting
  const handleEmailSort = () => {
    
    setSecondTableState(false);
    const sortedData = [...normalState].sort((a, b) =>
      a?.email > b?.email ? 1 : -1
    );

    setNormalState(sortedData);
  };

  // joining Date sorting
  const handleDateSort = () => {
    
    setThirdTableState(false);
    const sortedData = [...normalState].sort((a, b) =>
      a?.joiningDate > b?.joiningDate ? 1 : -1
    );

    setNormalState(sortedData);
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              {secondTableState ? (
                <th className="flex ">
                  Name
                  <button onClick={handleNameSort} className="mx-2">
                    {firstTableState ? <BiSort></BiSort> : <></>}
                  </button>
                </th>
              ) : (
                <></>
              )}
              {firstTableState && secondTableState ? (
                <th>
                  City
                  <button onClick={() => handlesort("city")} className="mx-2">
                    <BiSort></BiSort>
                  </button>
                </th>
              ) : (
                <></>
              )}
              {thirdTableState ? (
                <th>
                  Email Address
                  <button onClick={handleEmailSort} className="mx-2">
                  {secondTableState ? <BiSort></BiSort> : <></>}
                  </button>
                </th>
              ) : (
                <></>
              )}
              {firstTableState ? (
                <th>
                  Joining Date
                  <button onClick={handleDateSort} className="mx-2">
                  {thirdTableState ? <BiSort></BiSort> : <></>}
                  </button>
                </th>
              ) : (
                <></>
              )}
              <th>
                Role
                <button onClick={() => handlesort("role")} className="mx-2">
                  <BiSort></BiSort>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {normalState?.map((tabData) => (
              <tr key={Math.random()}>
                {secondTableState ? (
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
                ) : (
                  <></>
                )}
                {firstTableState && secondTableState ? (
                  <td>{tabData?.city}</td>
                ) : (
                  <></>
                )}
                {thirdTableState ? <td>{tabData?.email}</td> : <></>}
                {firstTableState ? <td>{tabData?.joiningDate}</td> : <></>}
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
