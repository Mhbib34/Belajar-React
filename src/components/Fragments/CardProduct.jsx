function CardProduct({ children }) {
  return (
    <div className="p-5 bg-gray-800 rounded-2xl max-w-[400px] flex flex-col gap-2 text-white">
      {children}
    </div>
  );
}

function Body({ children, title, images }) {
  return (
    <div className="flex flex-col justify-center">
      <img src={images} alt="" className="w-md h-md" />
      <h2 className="font-medium text-2xl my-2">{title}</h2>
      <p className="font-light">{children}</p>
    </div>
  );
}

function Price({ children }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl">{children}</h2>
      <div className="">
        <button className="p-2 bg-blue-500 rounded-md">Add To Cart</button>
      </div>
    </div>
  );
}

CardProduct.Body = Body;
CardProduct.Price = Price;

export default CardProduct;
