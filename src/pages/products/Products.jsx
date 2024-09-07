import { useContext, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { UserContext } from "../../context/AuthContext";

const Products = () => {
  const [active, setactive] = useState("");
  const [filter, setFilter] = useState("");
  const { products } = useContext(UserContext);

  const handleFilter = (value) => {
    setFilter(value);
    setactive(value);
  };

  const cats = [
    {
      name: "Rocking Chair",
      value: "rocking",
    },
    {
      name: "Side Chair",
      value: "side",
    },
    {
      name: "Lounge Chair",
      value: "lounge",
    },
  ];

  const filteredProducts = products?.filter((prod) => prod.cat === filter);
  const result = filteredProducts?.length > 0 ? filteredProducts : products;

  return (
    <div className="px-5 lg:px-[160px] py-5 lg:py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter List */}
        <div className=" lg:w-[18%] pb-5 lg:pb-0 lg:border-r">
          <ul className="flex flex-col items-center lg:items-start gap-2 lg:gap-4">
            {cats.map((cat, index) => {
              return (
                <button
                  key={index}
                  className={`w-[140px] lg:w-[190px] px-3 py-1 lg:py-2 transition-all ease-in-out rounded-md lg:text-left text-sm lg:text-[20px] font-medium ${
                    active === cat.value
                      ? "bg-black text-white"
                      : "text-[#717171]"
                  }`}
                  onClick={() => handleFilter(cat.value)}
                >
                  {cat.name}
                </button>
              );
            })}
          </ul>
        </div>

        {/* Products List */}
        <div className="w-full lg:w-[80%] mx-auto flex flex-wrap gap-8 justify-center lg:justify-between lg:px-4">
          {/* Card */}
          {result?.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
