import IndexButton from "../Element/Button/Index";
import Input from "../Element/Input/Input";
function FormLogin(props) {
  const { title } = props;
  return (
    <form className="bg-white/20 backdrop-blur-sm py-10 px-10 rounded-2xl flex flex-col w-md">
      <h1 className="my-2 font-medium text-3xl text-blue-400">{title}</h1>
      <p className="text-white">Welcome, Please enter your Login Information</p>
      <div className="flex flex-col gap-2 my-4">
        <Input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          htmlFor="email"
          textLabel="Email"
        />
        <Input
          type="password"
          placeholder="******"
          name="password"
          htmlFor="password"
          textLabel="Password"
        />
      </div>
      <IndexButton />
    </form>
  );
}

export default FormLogin;
