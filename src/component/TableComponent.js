import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiSort } from "react-icons/bi";

const TableComponent = ({ setNormalState, normalState }) => {
  //Name  state
  const [firstTableState, setFirstTableState] = useState(true);
  //Email  state
  const [secondTableState, setSecondTableState] = useState(true);
  //Joining date  state
  const [thirdTableState, setThirdTableState] = useState(true);
  //City state
  const [cityTableState, setCityTableState] = useState(true);
  //Role state
  const [roleTableState, setRoleTableState] = useState(true);

  const handlesort = (category) => {
    if (category === "city") {
      const sortedData = [...normalState].sort((a, b) =>
        a?.city > b?.city ? 1 : -1
      );

      setNormalState(sortedData);
      setCityTableState(false);
      toast.success(`Table is sorted, in ascending order.`);
    }
    if (category === "role") {
      const sortedData = [...normalState].sort((a, b) =>
        a?.role > b?.role ? 1 : -1
      );

      setNormalState(sortedData);
      setRoleTableState(false);
      toast.success(`Table is sorted, in ascending order.`);
    }
  };
  //name sorting
  const handleNameSort = (e) => {
    setFirstTableState(false);

    const sortedData = [...normalState].sort((a, b) =>
      a?.person?.name > b?.person?.name ? 1 : -1
    );

    setNormalState(sortedData);
    toast.success(` Table is sorted, in ascending order.`);
  };
  //email sorting
  const handleEmailSort = () => {
    setSecondTableState(false);
    const sortedData = [...normalState].sort((a, b) =>
      a?.email > b?.email ? 1 : -1
    );

    setNormalState(sortedData);
    toast.success(` Table is sorted, in ascending order.`);
  };

  // joining Date sorting
  const handleDateSort = () => {
    setThirdTableState(false);
    const sortedData = normalState.sort((a, b) =>
      a.joiningDate
        .split("/")
        .reverse()
        .join()
        .localeCompare(b.joiningDate.split("/").reverse().join())
    );

    setNormalState(sortedData);
    toast.success(` Table is sorted, in ascending order.`);
  };
  return (
    <div>
      <div className="overflow-x-auto w-full ">
        <table className="table table-zebra  w-full">
          <thead>
            <tr className="w-full">
              {secondTableState ||
              (roleTableState && !thirdTableState) ||
              !roleTableState ? (
                <th className="flex ">
                  Name
                  <button onClick={handleNameSort} className="mx-2">
                    {firstTableState ? <BiSort></BiSort> : <></>}
                  </button>
                </th>
              ) : (
                <></>
              )}
              {(firstTableState && secondTableState) || !roleTableState ? (
                <th>
                  City
                  <button onClick={() => handlesort("city")} className="mx-2">
                    {cityTableState ? <BiSort></BiSort> : <></>}
                  </button>
                </th>
              ) : (
                <></>
              )}
              {thirdTableState ||
              (!firstTableState && !thirdTableState) ||
              !roleTableState ? (
                <th>
                  Email Address
                  <button onClick={handleEmailSort} className="mx-2">
                    {secondTableState ? <BiSort></BiSort> : <></>}
                  </button>
                </th>
              ) : (
                <></>
              )}
              {firstTableState ||
              (roleTableState && !secondTableState) ||
              !roleTableState ? (
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
                  {roleTableState ? <BiSort></BiSort> : <></>}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {normalState?.map((tabData) => (
              <tr key={Math.random()}>
                {secondTableState ||
                (roleTableState && !thirdTableState) ||
                !roleTableState ? (
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-8 rounded-full ">
                          <img src="https://placeimg.com/192/192/people" />
                        </div>
                      </div>
                      <div>
                        <div className="">{tabData?.person.name}</div>
                      </div>
                    </div>
                  </td>
                ) : (
                  <></>
                )}
                {(firstTableState && secondTableState) || !roleTableState ? (
                  <td>{tabData?.city}</td>
                ) : (
                  <></>
                )}
                {thirdTableState ||
                (!firstTableState && !thirdTableState) ||
                !roleTableState ? (
                  <td>{tabData?.email}</td>
                ) : (
                  <></>
                )}
                {firstTableState ||
                (roleTableState && !secondTableState) ||
                !roleTableState ? (
                  <td>{tabData?.joiningDate}</td>
                ) : (
                  <></>
                )}
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
