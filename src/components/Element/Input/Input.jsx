function Input(props) {
  const { type, placeholder } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-white p-1.5 rounded-md "
      />
    </>
  );
}
export default Input;
