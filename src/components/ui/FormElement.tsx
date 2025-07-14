export default function FormElement({
  label,
  name,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="text-sm capitalize" aria-label={label}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="dark:bg-[#242B51] rounded-lg py-3 px-6 focus:outline-foreground focus:outline-1 shadow-md text-gray-600 dark:text-gray-200 outline-none"
      />
    </div>
  );
}
