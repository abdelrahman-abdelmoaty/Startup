export default function FormElement({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
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
        className="dark:bg-[#242B51] rounded-lg py-3 px-6 focus:outline-foreground focus:outline-1 shadow-md text-gray-400 outline-none"
      />
    </div>
  );
}
