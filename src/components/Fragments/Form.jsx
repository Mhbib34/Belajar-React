import IndexButton from "../Element/Button/Index";
import InputIndex from "../Element/Input";
function Form() {
  return (
    <div className="bg-white/20 backdrop-blur-sm py-10 px-10 rounded-2xl flex flex-col w-md">
      <h1 className="my-2 text-center font-medium text-3xl text-white">
        Login
      </h1>
      <InputIndex />
      <IndexButton />
    </div>
  );
}

export default Form;
