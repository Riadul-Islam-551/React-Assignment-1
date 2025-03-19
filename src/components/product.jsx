import "../App.css";

const stores = [
  {
    Title: "Gines Bag",
    Price: "$ 109.90",
    Rating: "3.9/5",
    Decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit sint ullam. Veritatis sapiente vero ut. Magnam mollitia odit sunt?",
    Cart: "Add to Cart",
  },
  {
    Title: "Gines Bag",
    Price: "$ 109.90",
    Rating: "3.9/5",
    Decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit sint ullam. Veritatis sapiente vero ut. Magnam mollitia odit sunt?",
    Cart: "Add to Cart",
  },
  {
    Title: "Gines Bag",
    Price: "$ 109.90",
    Rating: "3.9/5",
    Decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit sint ullam. Veritatis sapiente vero ut. Magnam mollitia odit sunt?",
    Cart: "Add to Cart",
  },
  {
    Title: "Gines Bag",
    Price: "$ 109.90",
    Rating: "3.9/5",
    Decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit sint ullam. Veritatis sapiente vero ut. Magnam mollitia odit sunt?",
    Cart: "Add to Cart",
  },
  {
    Title: "Gines Bag",
    Price: "$ 109.90",
    Rating: "3.9/5",
    Decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit sint ullam. Veritatis sapiente vero ut. Magnam mollitia odit sunt?",
    Cart: "Add to Cart",
  },
  {
    Title: "Gines Bag",
    Price: "$ 109.90",
    Rating: "3.9/5",
    Decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit sint ullam. Veritatis sapiente vero ut. Magnam mollitia odit sunt?",
    Cart: "Add to Cart",
  },
];

function Product() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto">
      {stores.map((store, index) => {
        return (
          <div className=" m-auto">
            <div key={index} className=" bag w-[300px] rounded-xl p-3">
              <h1 className="text-center font-bold mb-3">{store.Title}</h1>
              <h3 className="price"><span className="text-black">Price: </span>{store.Price}</h3>
              <h3 className="mb-3 price"><span className="text-black">Rating: </span>{store.Rating}</h3>
              <p className="text-sm text-justify desc mb-3">{store.Decs}</p>
              <button className="btn">{store.Cart}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Product;
