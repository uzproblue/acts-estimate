import { useRef, useState } from "react";
import EstimateTable from "./EstimateTable";
import SummaryTable from "./SummaryTable";
import { TableData } from "./contants";
import type { TableDataType } from "./Types";
import { useReactToPrint } from "react-to-print";
import { Icon } from "@iconify/react";

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
        {isDarkTheme ? (
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className="cursor-pointer"
          >
            <Icon icon="lets-icons:sun-light" fontSize={24} />
          </button>
        ) : (
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className="cursor-pointer"
          >
            <Icon icon="circum:dark" fontSize={24} />
          </button>
        )}
      </div>
      <button
        onClick={reactToPrintFn}
        className="flex items-center gap-1 cursor-pointer bg-[var(--tw-bg-muted)] py-2 mt-2 px-4 hover:opacity-70"
      >
        <Icon icon="material-symbols:print-outline-rounded" />
        Print
      </button>
      <div ref={contentRef} className="px-1">
        <EstimateTable tableData={tableData} setTableData={setTableData} />
        <SummaryTable data={tableData} />
      </div>
    </div>
  );
}
