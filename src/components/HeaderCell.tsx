export default function HeaderCell({ children }: { children: string }) {
  return (
    <th className="p-2 py-3 text-start w-fit whitespace-nowrap">{children}</th>
  );
}
