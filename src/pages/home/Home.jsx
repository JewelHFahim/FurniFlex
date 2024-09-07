import { Suspense } from "react";
import Slider from "../../components/Slider";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../redux/features/products/productApi";

const Home = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  console.log(products)

  return (
    <div className="">
      <Slider />

      <div className="px-5 lg:px-[160px] py-5 lg:py-10">
        <h2 className="text-2xl font-semibold mb-5">New Products</h2>
        <Suspense fallback="Loading...">
          <div className="flex flex-wrap justify-center md:grid md:grid-cols-4 gap-5">
            {isLoading
              ? [...Array(4)].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-[250px] h-[400px] bg-slate-400 rounded-lg animate-pulse"
                  />
                ))
              : products?.data?.map((product, index) => {
                  return <ProductCard key={index} product={product} />;
                })}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
