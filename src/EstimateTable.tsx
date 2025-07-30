import HeaderCell from "./components/HeaderCell";
import TableRow from "./components/TableRow";
import type { TableDataType } from "./Types";

export default function EstimateTable({
  tableData,
  setTableData,
}: {
  tableData: TableDataType[];
  setTableData: React.Dispatch<React.SetStateAction<TableDataType[]>>;
}) {
  return (
    <>
      <div className="overflow-auto max-h-screen">
        <table className="min-w-full rounded-t-[20px]  text-sm text-start mt-4">
          <thead className="sticky top-4 bg-[var(--tw-bg-muted)] z-10 border border-[var(--tw-bg-muted)]">
            <tr>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Qty</HeaderCell>
              <HeaderCell>Unit</HeaderCell>
              <HeaderCell>Mat Unit $</HeaderCell>
              <HeaderCell>Mat Total $</HeaderCell>
              <HeaderCell>Lab Unit $</HeaderCell>
              <HeaderCell>Lab Total $</HeaderCell>
              <HeaderCell>Equip Unit $</HeaderCell>
              <HeaderCell>Equip Total $</HeaderCell>
              <HeaderCell>Sub Unit $</HeaderCell>
              <HeaderCell>Sub Total $</HeaderCell>
              <HeaderCell>Total Unit $</HeaderCell>
              <HeaderCell>Total $</HeaderCell>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <TableRow
                tableData={tableData}
                setTableData={setTableData}
                items={item}
                index={i}
                key={i}
              />
            ))}
          </tbody>
        </table>
      </div>
      <button
        className=" cursor-pointer"
        onClick={() => {
          const newData = tableData.concat({} as TableDataType);
          setTableData(newData);
        }}
      >
        + Add a row
      </button>
    </>
  );
}
