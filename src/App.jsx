import "./App.css";
import Bg from "./assets/bg.jpg";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/register";
function App() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      {/* <LoginPage /> */}
      <RegisterPage />
    </div>
  );
}

export default App;
