import CardProduct from "../components/Fragments/CardProduct";

const ProductsPages = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <CardProduct>
        <CardProduct.Body title="Nike Shoes" images="/img/football-shoes.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          eum eligendi, cum error mollitia a aspernatur deserunt voluptates id
          placeat assumenda deleniti exercitationem iste delectus labore quod!
          Labore, ullam natus!
        </CardProduct.Body>
        <CardProduct.Price>Rp. 500.000</CardProduct.Price>
      </CardProduct>
    </div>
  );
};

export default ProductsPages;
