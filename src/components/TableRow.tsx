import { useEffect, useState } from "react";
import TextCell from "./TextCell";
import NumberCell from "./NumberCell";
import SelectCell from "./SelectCell";
import { UnitOptions } from "../contants";
import TotalCell from "./TotalCell";
import type { TableDataType } from "../Types";

interface Props {
  description: string;
  qty: number;
  unit: string;
  matUnitCost: number;
  labUnitCost: number;
  equipUnitCost: number;
  subUnitCost: number;
}

export default function TableRow({
  items,
  tableData,
  setTableData,
  index,
}: {
  items: Props;
  tableData: TableDataType[];
  setTableData: React.Dispatch<React.SetStateAction<TableDataType[]>>;
  index: number;
}) {
  const [rowDescription, setRowDescription] = useState(items.description);
  const [quantity, setQuantity] = useState(items.qty ?? 0);
  const [unitValue, setUnitValue] = useState(items.unit ?? 0);
  const [matUnit, setMatUnit] = useState(items.matUnitCost ?? 0);
  const [labUnit, setLabUnit] = useState(items.labUnitCost ?? 0);
  const [equipUnit, setEquipUnit] = useState(items.equipUnitCost ?? 0);
  const [subUnit, setSubUnit] = useState(items.subUnitCost ?? 0);
  const [totalUnit, setTotalUnit] = useState<number>(0);
  useEffect(() => {
    const sum = matUnit + labUnit + equipUnit + subUnit;
    setTotalUnit(sum);
    setTableData((prev) => {
      const newData = [...prev];
      const updatedRow = { ...newData[index] };

      updatedRow.totalMaterial = matUnit * quantity;
      updatedRow.totalLabor = labUnit * quantity;
      updatedRow.total = sum * quantity;

      newData[index] = updatedRow;
      return newData;
    });
  }, [matUnit, labUnit, equipUnit, subUnit]);

  return (
    <tr className=" border-[var(--tw-bg-muted)] border hover:bg-[var(--tw-bg-muted)] cursor-pointer transition ">
      <TextCell
        placeholder="Enter description..."
        value={rowDescription}
        setValue={setRowDescription}
      />
      <NumberCell
        placeholder="Enter quantity..."
        value={quantity}
        setValue={setQuantity}
      />
      <SelectCell
        options={UnitOptions}
        value={unitValue}
        setValue={setUnitValue}
      />

      <NumberCell
        placeholder="Enter mat unit..."
        value={matUnit}
        setValue={setMatUnit}
      />

      <td className="p-2">{quantity * matUnit}</td>
      <NumberCell
        placeholder="Enter lab unit..."
        value={labUnit}
        setValue={setLabUnit}
      />

      <td className="p-2">{quantity * labUnit}</td>

      <NumberCell
        placeholder="Enter equip unit..."
        value={equipUnit}
        setValue={setEquipUnit}
      />

      <td className="p-2">{quantity * equipUnit}</td>

      <NumberCell
        placeholder="Enter sub unit..."
        value={subUnit}
        setValue={setSubUnit}
      />

      <td className="p-2">{quantity * subUnit}</td>

      <TotalCell
        value={totalUnit}
        setValue={setTotalUnit}
        setMatUnit={setMatUnit}
        setLabUnit={setLabUnit}
        setSubUnit={setSubUnit}
        setEquipUnit={setEquipUnit}
      />
      <td className="p-2">{(quantity * totalUnit).toFixed(2)}</td>
    </tr>
  );
}
