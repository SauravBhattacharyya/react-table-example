import React, { useMemo } from "react";
import { tableColumn } from "./utils/tableColumnUtil";
import { tableData } from "./utils/tableDataUtil";
import TableContainer from "./tableContainer";

const App = () => {
  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => tableData, []);

  return <TableContainer data={data} columns={columns} />;
};

export default App;
