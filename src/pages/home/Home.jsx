import { Suspense, useContext } from "react";
import Slider from "../../components/Slider";
import { UserContext } from "../../context/AuthContext";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const { products } = useContext(UserContext);

  return (
    <div className="">
      <Slider />

      <div className="px-5 lg:px-[160px] py-5 lg:py-10">
        <h2 className="text-2xl font-semibold mb-5">New Products</h2>
        <Suspense fallback="Loading...">
          <div className=" flex flex-wrap justify-center md:grid md:grid-cols-4 gap-5">
            {products?.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
          </div>
        </Suspense>
      </div>

    </div>
  );
};

export default Home;
