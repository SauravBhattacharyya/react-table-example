import React, { useMemo } from "react";
import { tableData } from "./data";
import TableContainer from "./tableContainer";

const App = () => {
  const columns = useMemo(
    () => [
      { Header: "First Name", accessor: "first_name" },
      { Header: "Last Name", accessor: "last_name" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Date of Birth", accessor: "date_of_birth" },
      { Header: "Sex", accessor: "sex" },
    ],
    []
  );

  const data = useMemo(() => tableData, []);

  return <TableContainer data={data} columns={columns} />;
};

export default App;
