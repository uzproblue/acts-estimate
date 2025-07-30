import { useRef, useState } from "react";

import EstimateTable from "./EstimateTable";
import SummaryTable from "./SummaryTable";
import { TableData } from "./contants";
import type { TableDataType } from "./Types";
import { useReactToPrint } from "react-to-print";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [tableData, setTableData] = useState<TableDataType[]>(
    TableData as TableDataType[]
  );

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div
      data-theme={isDarkTheme ? "dark" : ""}
      className="p-4 min-h-screen bg-[var(--tw-bg-neutral)] text-[var(--tw-text-default)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold mb-4">ACTS Estimate Table</h1>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>dark</button>
      </div>
      <button onClick={reactToPrintFn}>Print</button>
      <div ref={contentRef} className="px-1">
        <EstimateTable tableData={tableData} setTableData={setTableData} />
        <SummaryTable data={tableData} />
      </div>
    </div>
  );
}
