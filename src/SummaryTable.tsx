import HeaderCell from "./components/HeaderCell";
import type { TableDataType } from "./Types";

export default function SummaryTable({ data }: { data: TableDataType[] }) {
  const totalMaterial = data.reduce(
    (total, row) => total + (row.totalMaterial ?? 0),
    0
  );
  const totalLabor = data.reduce(
    (total, row) => total + (row.totalLabor ?? 0),
    0
  );
  const total = data.reduce((total, row) => total + (row.total ?? 0), 0);
  return (
    <div className="max-w-[500px]">
      <table className="min-w-full rounded-t-[20px]  text-base text-start mt-4">
        <thead className="sticky top-4 bg-[var(--tw-bg-muted)] z-10 border border-[var(--tw-bg-muted)]">
          <tr>
            <HeaderCell> Total Material $</HeaderCell>
            <HeaderCell>Total Labor $</HeaderCell>
            <HeaderCell>Total Estimate $</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-[var(--tw-bg-muted)] border hover:bg-[var(--tw-bg-muted)] cursor-pointer transition text-base ">
            <td className="p-2 font-medium border border-[var(--tw-bg-muted)]">
              {totalMaterial} $
            </td>
            <td className="p-2 font-medium border border-[var(--tw-bg-muted)]">
              {totalLabor} $
            </td>
            <td className="p-2 font-medium border border-[var(--tw-bg-muted)]">
              {total} $
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
