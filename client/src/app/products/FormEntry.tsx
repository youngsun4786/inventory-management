type FormEntryProps = {
  htmlFor: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | readonly string[] | undefined;
};

const FormEntry = ({
  htmlFor,
  label,
  type,
  name,
  placeholder,
  handleChange,
  value,
}: FormEntryProps) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        className="block w-full mb-2 p-2 border-gray-500 border-2 rounded-md"
        required={true}
      />
    </>
  );
};

export default FormEntry;
