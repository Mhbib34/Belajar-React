function Button(props) {
  return (
    <button
      type="submit"
      className="p-1.5 bg-blue-400 rounded-lg text-white cursor-pointer hover:bg-blue-500 transition-all duration-150 w-[45%]"
    >
      {props.text}
    </button>
  );
}
export default Button;
