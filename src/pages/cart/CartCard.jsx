/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import {
  addToCart,
  removeFromCart,
  removeSingle,
} from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({ item }) => {
  console.log(item?.img)

  const dispatch = useDispatch();

  return (
    <div className="border-b bg-[#fafafa] py-2 px-3 flex flex-col">
      <div className="flex items-center gap-5">
        {/* quantity update btn */}
        <div className=" hidden md:flex items-center gap-3 border rounded-md w-max px-3 text-lg font-semibold">
          <button
            className="text-[#7e7d7d]"
            onClick={() => (
              toast.success("Remove From Cart"), dispatch(removeSingle(item))
            )}
          >
            -
          </button>
          <p className="text-base">{item?.quantity}</p>
          <button
            className="text-[#7e7d7d]"
            onClick={() => (
              toast.success("Added To Cart"), dispatch(addToCart(item))
            )}
          >
            +
          </button>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex gap-3">
            <img
              src={item?.img}
              alt="product"
              className="w-[88px] h-[88px] bg-[#eaeaea] rounded-md"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-[#434343] text-base font-bold">
                {item?.title}
              </h3>

              <div className="flex md:hidden items-center gap-3 border rounded-md w-max px-3 text-lg font-semibold">
                <button className="text-[#7e7d7d]">-</button>
                <p className="text-base">{item?.quantity}</p>
                <button className="text-[#7e7d7d]">+</button>
              </div>

              <p className=" md:hidden md:text-[20px] font-semibold text-[#0E0E0E]">
                ${item?.price}
              </p>
            </div>
          </div>

          <button
            className="text-xl text-[#7e7d7d] hover:text-red-600 transition-all ease-in-out hover:scale-[1.2]"
            onClick={() => (
              toast.success("Remove Successfully!"),
              dispatch(removeFromCart(item))
            )}
          >
            X
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-end">
        <p className="text-[20px] font-semibold text-[#0E0E0E]">
          ${item?.price}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
