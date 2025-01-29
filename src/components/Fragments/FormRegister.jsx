import IndexButton from "../Element/Button/Index";
import Input from "../Element/Input/Input";
import { Link } from "react-router-dom";
function FormRegister(props) {
  const { title } = props;
  return (
    <div className="bg-white/20 backdrop-blur-sm py-10 px-10 rounded-2xl flex flex-col w-md">
      <h1 className="my-2 font-medium text-3xl text-blue-400">{title}</h1>
      <p className="text-white">Welcome, Please enter your Login Information</p>
      <div className="flex flex-col gap-2 my-4">
        <Input
          type="text"
          placeholder="Enter your full name"
          name="nama"
          htmlFor="nama"
          id="nama"
          textLabel="Nama"
        />
        <Input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          htmlFor="email"
          id="email"
          textLabel="Email"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          name="password"
          htmlFor="password"
          textLabel="Password"
          id="password"
        />
        <Input
          type="password"
          placeholder="Confirm password"
          name="confirm password"
          htmlFor="confirm password"
          textLabel="Confirm Password"
          id="confirm password"
        />
      </div>
      <p className="font-medium mb-3 ">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-blue-800 underline">
          Sign up
        </Link>
      </p>
      <IndexButton />
    </div>
  );
}

export default FormRegister;
