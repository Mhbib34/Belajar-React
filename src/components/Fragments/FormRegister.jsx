import IndexButton from "../Element/Button/Index";
import Input from "../Element/Input/Input";
function FormRegister(props) {
  const { title } = props;
  return (
    <div className="bg-white/20 backdrop-blur-sm py-10 px-10 rounded-2xl flex flex-col w-md">
      <h1 className="my-2 font-medium text-3xl text-blue-400">{title}</h1>
      <p className="text-white">Welcome, Please enter your Login Information</p>
      <div className="flex flex-col gap-2 my-4">
        <Input
          type="text"
          placeholder="Enter your name"
          name="nama"
          htmlFor="nama"
          textLabel="Nama"
        />
        <Input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          htmlFor="email"
          textLabel="Email"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          name="password"
          htmlFor="password"
          textLabel="Password"
        />
        <Input
          type="password"
          placeholder="Confirm password"
          name="confirm password"
          htmlFor="confirm password"
          textLabel="Confirm Password"
        />
      </div>
      <IndexButton />
    </div>
  );
}

export default FormRegister;
