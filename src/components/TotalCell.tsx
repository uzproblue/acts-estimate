import { useEffect, useState } from "react";

interface Iprops {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  setMatUnit: React.Dispatch<React.SetStateAction<number>>;
  setLabUnit: React.Dispatch<React.SetStateAction<number>>;
  setEquipUnit: React.Dispatch<React.SetStateAction<number>>;
  setSubUnit: React.Dispatch<React.SetStateAction<number>>;
}
export default function TotalCell({
  value,
  setValue,
  setMatUnit,
  setLabUnit,
  setEquipUnit,
  setSubUnit,
}: Iprops) {
  const handleTotalChange = (newValue: number) => {
    if (value && newValue) {
      const changePerUnit = (newValue - value) / 4;
      setMatUnit((prev) => prev + changePerUnit);
      setLabUnit((prev) => prev + changePerUnit);
      setEquipUnit((prev) => prev + changePerUnit);
      setSubUnit((prev) => prev + changePerUnit);
      setValue(newValue);
    }
  };

  const [localValue, setLocalValue] = useState<string>(value.toString());

  useEffect(() => {
    setLocalValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (raw === "" || /^[0-9]*\.?[0-9]*$/.test(raw)) {
      setLocalValue(raw);
      handleTotalChange(Number(raw));
    }
  };

  const handleBlur = () => {
    const num = parseFloat(localValue);
    if (!isNaN(num)) {
      setValue(num);
    } else {
      setLocalValue(value.toString());
    }
  };

  return (
    <td className="p-2">
      <input
        className="border-none text-sm p-0 focus:outline-hidden max-w-24 w-full "
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </td>
  );
}
