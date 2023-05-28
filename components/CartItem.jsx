import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id))
    toast.success("Item removed from Cart")
  }

  return (
    <div className=" md:w-[90%] xs:w-[100%]">
      <div className="flex items-center justify-center gap-x-14 mt-8 border-b border-slate-600 pb-6">

        <div className="h-[150px] w-[180px] ">
          <img className="w-full h-full" src={item.image}/>
        </div>

        <div className="flex flex-col gap-y-4">
          <h1 className="text-[--Card-title-color] font-semibold md:w-3/5 xs:w-[100%]">{item.title}</h1>
          <h1 className="w-[100%] text-[--Card-Desc-color] font-normal  text-left">{item.description.split(" ").slice(0 ,16).join(" ") + "..."}</h1>
          <div className="flex justify-between items-center">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeFromCart}
              className="bg-red-300 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
            >
              <FcDeleteDatabase className="text-2xl "/>
            </div>
          </div>
      </div>

      </div>
    </div>
  );
};

export default CartItem;
