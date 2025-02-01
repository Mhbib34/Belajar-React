import CardProduct from "../components/Fragments/CardProduct";

const email = localStorage.getItem("email");
const ProductsPages = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <div className="w-screen h-screen">
      <div className="bg-blue-500 p-4">
        <div className="mx-20 flex items-center gap-2 ">
          <span>{email}</span>
          <button
            className="bg-black p-2 rounded-md text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-20">
        <CardProduct>
          <CardProduct.Body title="Nike Shoes" images="/img/football-shoes.jpg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, eum eligendi, cum error mollitia a aspernatur deserunt
            voluptates id placeat assumenda deleniti exercitationem iste
            delectus labore quod! Labore, ullam natus!
          </CardProduct.Body>
          <CardProduct.Price>Rp. 1.500.000</CardProduct.Price>
        </CardProduct>
        <CardProduct>
          <CardProduct.Body title="Nike Shoes" images="/img/football-shoes.jpg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, eum eligendi, cum error mollitia a aspernatur deserunt
            voluptates id placeat assumenda deleniti exercitationem iste
            delectus labore quod! Labore, ullam natus!
          </CardProduct.Body>
          <CardProduct.Price>Rp. 1.500.000</CardProduct.Price>
        </CardProduct>
      </div>
    </div>
  );
};

export default ProductsPages;
