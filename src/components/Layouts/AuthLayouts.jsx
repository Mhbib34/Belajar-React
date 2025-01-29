import Bg from "../../assets/bg.jpg";

function AuthLayouts(props) {
  const { children } = props;
  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      {children}
    </div>
  );
}

export default AuthLayouts;
