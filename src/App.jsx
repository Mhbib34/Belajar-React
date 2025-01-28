import "./App.css";
import Form from "./components/Fragments/Form";
import Bg from "./assets/bg.jpg";
function App() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div></div>
      <Form />
    </div>
  );
}

export default App;
