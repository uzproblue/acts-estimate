import { useEffect, useState } from "react";

type Props = {
  value: number;
  setValue: (val: number) => void;
  placeholder?: string;
};

const NumberCell: React.FC<Props> = ({ value, setValue, placeholder }) => {
  const [localValue, setLocalValue] = useState<string>(value.toString());

  useEffect(() => {
    setLocalValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (raw === "" || /^[0-9]*\.?[0-9]*$/.test(raw)) {
      setLocalValue(raw);
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
        className="border-none text-sm p-0 focus:outline-none max-w-24 w-full"
        type="text"
        inputMode="decimal"
        value={localValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
    </td>
  );
};

export default NumberCell;
