import Input from "./Input";

function InputIndex() {
  return (
    <div className="flex flex-col gap-2 my-4  ">
      <Input type="email" placeholder="Enter your email..." />
      <Input type="password" placeholder="*********" />
    </div>
  );
}
export default InputIndex;
