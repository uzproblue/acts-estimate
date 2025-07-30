interface Iprops {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

export default function TextCell({ value, setValue, placeholder }: Iprops) {
  return (
    <td className="p-2">
      <input
        className="border-none text-sm p-0 focus:outline-hidden "
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </td>
  );
}
