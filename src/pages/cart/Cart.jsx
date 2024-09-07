import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);

  return (
    <div className="px-5 lg:px-[160px] py-5 lg:py-10 flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-[70%]">
        <h1 className="text-[22px] lg:text-[28px] font-semibold text-[#1E1E1E]">
          An overview of your order
        </h1>

        {products?.length <= 0 && (
          <p className="text-[#656565]">No item available now</p>
        )}

        <div className="mt-5 lg:mt-8">
          {products.map((item, index) => {
            return <CartCard key={index} item={item} />;
          })}
        </div>

        <Link
          to="/products"
          className="text-lg font-medium text-blue-600 flex items-center justify-center gap-1"
        >
          Back to shopping <FaLongArrowAltLeft className="mt-1" />
        </Link>
      </div>

      {/*Order Details / Summary */}
      <div className="w-full lg:w-[30%] h-max">
        <h1 className="text-[28px] font-semibold text-[#1E1E1E]">
          Order details
        </h1>

        <div className=" md:mt-8 p-5 flex flex-col gap-5">
          <div className="border bg-[#fafafa] p-4 rounded-lg">
            <div className="flex flex-col gap-2 border-b pb-2">
              <p className="text-[#656565] text-[20px] flex justify-between items-center">
                Subtotal: <span>${total}</span>
              </p>
              <p className="text-[#656565] text-[20px] flex justify-between items-center">
                Shipping: <span>Free</span>
              </p>
              <p className="text-[#656565] text-[20px] flex justify-between items-center">
                Estimated Tax: <span>$0.00</span>
              </p>
            </div>
            <p className="mt-2 text-[20px] font-semibold flex justify-between items-center">
              Total: <span>${total}</span>
            </p>
          </div>

          <Link
            to="/checkout"
            className="text-[17px] flex justify-center items-center uppercase font-medium text-white bg-black hover:bg-black/80 py-1.5 w-full rounded-md"
          >
            Go To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
