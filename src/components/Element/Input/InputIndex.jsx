function Input({ type, placeholder, name, textLabel, htmlFor }) {
  return (
    <>
      <label htmlFor={htmlFor} className="text-black font-normal text-lg">
        {textLabel}
      </label>
      <input
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        className="bg-white p-1.5 rounded-md w-full"
      />
    </>
  );
}
export default Input;
