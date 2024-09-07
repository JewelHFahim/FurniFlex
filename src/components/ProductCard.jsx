/* eslint-disable react/prop-types */
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border-[#F1F1F1] border rounded-[16px] w-[277px] p-4 flex flex-col justify-between gap-6">
      <div className="bg-[#F2F2F2] rounded-[8px]">
        <img src={product.img} alt="" className="w-[205px] h-[205px]" />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-[#343434] font-semibold text-[18px]">
          {product.title}
        </h2>
        <div className="flex text-[18px] justify-between items-center">
          <p className="font-bold text-[#343434]">${product.price}</p>
          <p className="font-medium text-[#ABABAB] line-through">
            ${product.disPrice}
          </p>
          <p className="font-semibold text-[#B92E2E]">
            {product.disPrice}% OFF
          </p>
        </div>
        <p className="text-sm text-[#838383]">{product.des}</p>

        <button
          className="mt-4 text-white bg-black hover:bg-black/85 transition-all ease-in-out w-full py-2 font-semibold rounded-md flex justify-center items-center gap-2"
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

export default ProductCard;
