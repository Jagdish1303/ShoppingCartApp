import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = ({currentMode}) => {
  
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log(totalAmount)
  useEffect(() =>{
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price,0))
  }, [cart])
  return (
    <div className="max-w-6xl mx-auto">
      {
        cart.length > 0 ?
        (<div className="md:flex xs:flex-col  justify-between">
          <div className="w-full">
            {
              cart.map( (item, index) =>{
                return <CartItem key={item.id} item={item} itemIndex = {index}/>
              } )
            }
          </div>
            
          <div className=" flex flex-col justify-between md:w-3/5 xs:w-[90%] mt-10 md:h-[80vh] xs:h-[60vh]">

            <div className="flex flex-col gap-y-3">
              <p className="text-green-600 font-semibold text-lg">Your Cart</p>
              <p className="text-green-600 font-bold text-[2rem] uppercase">Summary</p>
              <span className={currentMode === "light" ? "text-black font-semibold" : "text-white font-semibold"}>Total Items : {cart.length}</span>
              <p className="text-slate-600 font-semibold">Total Amount : <span className={currentMode === "light" ? "text-black font-bold" : "text-white font-bold"}>${totalAmount}</span></p>
            </div>

            <div className="flex flex-col gap-3 w-full mt-4 mb-3">
              <button className="bg-green-600 w-full h-10 rounded-lg text-white font-bold hover:bg-green-700 transition duration-300">Checkout Now</button>
            </div>

          </div>
        </div>) : 
        (
          <div className="flex justify-center flex-col items-center h-[80vh] gap-y-4">
            <h1 className={currentMode === "light" ? "text-black font-bold text-lg" : "text-white font-bold text-lg"}>Cart Empty</h1>
            <Link to="/">
              <button className="bg-green-600 p-3 rounded-lg text-white font-bold hover:bg-green-700">
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
