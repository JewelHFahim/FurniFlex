import { HiOutlineShoppingBag } from "react-icons/hi";
import { useGetSingleProductQuery } from "../../redux/features/products/productApi";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/cartSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product } = useGetSingleProductQuery(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="my-4 lg:my-16 px-5 md:px-[160px] flex flex-col lg:flex-row gap-16">
      {/* Images */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <img src={product?.data?.img} alt="" className=" md:h-[500px] md:w-[50vw]" />
      </div>

      {/* Texts */}
      <div className="w-full lg:w-1/2 h-max flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product?.data?.title}</h1>

        <p className=" text-gray-500">{product?.data?.des}</p>

        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          {product?.data?.price === product?.data?.disPrice ? (
            <h3 className="font-medium text-2xl">${product?.data?.disPrice}</h3>
          ) : (
            <>
              <h3 className="text-gray-500 text-xl line-through">
                ${product?.data?.disPrice}
              </h3>
              <h3 className="font-medium text-2xl">${product?.data?.price}</h3>
            </>
          )}
        </div>
        <p>
          Status:{" "}
          <span className="text-green-700 font-semibold">Available</span>
        </p>
        <p>
          Quantity:{" "}
          <span className="font-semibold">{product?.data?.quantity}</span>
        </p>

        <div className="h-[2px] bg-gray-100" />
        <button
          className="mt-4 text-white bg-black hover:bg-black/85 transition-all ease-in-out w-full py-2.5 font-semibold rounded-md flex justify-center items-center gap-2"
          onClick={() => (
            toast.success("Added To Cart"), dispatch(addToCart(product))
          )}
        >
          <HiOutlineShoppingBag className="text-lg" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
