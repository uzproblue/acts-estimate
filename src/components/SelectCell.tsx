interface Iprops {
  options: string[];
  value: string;
  setValue: (value: string) => void;
}

export default function SelectCell({ value, setValue, options }: Iprops) {
  return (
    <td className="p-2">
      <select
        className="border-none text-sm p-0 focus:outline-hidden "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((item, index) => (
          <option key={index}> {item} </option>
        ))}
      </select>
    </td>
  );
}
