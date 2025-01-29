import NotFoundImage from "../assets/404.png";
import { useRouteError } from "react-router-dom";
function NotFoundPage() {
  const error = useRouteError();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <p className="font-bold text-2xl">
        {error.statusText || error.message} Page
      </p>
      <div
        className="bg-[50%] bg-no-repeat w-[60%] h-[60%]"
        style={{
          backgroundImage: `url(${NotFoundImage})`,
        }}
      ></div>
    </div>
  );
}
export default NotFoundPage;
