import { Link } from "react-router-dom";
import IndexButton from "../Element/Button/Index";
import Input from "../Element/Input/InputIndex";
function FormLogin({ title }) {
  const handleClick = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  return (
    <form
      className="bg-white/20 backdrop-blur-sm p-10 rounded-2xl flex flex-col w-md"
      onSubmit={handleClick}
    >
      <h1 className="my-2 font-medium text-3xl text-blue-400">{title}</h1>
      <p className="text-white">Welcome, Please enter your Login Information</p>
      <div className="flex flex-col gap-2 my-4">
        <Input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          htmlFor="email"
          textLabel="Email"
          id="email"
        />
        <Input
          type="password"
          placeholder="******"
          name="password"
          htmlFor="password"
          textLabel="Password"
          id="password"
        />
      </div>
      <p className="font-medium mb-2 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-medium text-blue-800 underline">
          Sign up
        </Link>
      </p>
      <IndexButton />
    </form>
  );
}

export default FormLogin;
