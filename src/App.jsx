import "./App.css";
import { FaBagShopping } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

function App() {
  return (
    <>
      <div>
        <div>
          <div className="m-[2rem]">
            <div className="flex flex-row items-center ">
              <div style={{ margin: "10px 0px" }}>
                <FaBagShopping
                  className="w-8 h-8 m-2"
                  style={{ color: "#9B5DFF" }}
                />
              </div>

              <div
                className="flex font-bold text-3xl"
                style={{ color: "#9B5DFF" }}
              >
                <h3 className="my-4">shop</h3>
                <div className="border-r-2 mx-2 h-16 border-black"></div>
              </div>

              <div>
                <div className="font-bold">Back to</div>
                <p
                  className="font-bold text-3xl flex"
                  style={{ color: "#9B5DFF" }}
                >
                  p<span className="text-black">fit</span>
                  <IoArrowForwardCircleOutline className="text-black mt-4 ms-2 h-[20px] w-[20px]" />
                </p>
              </div>
            </div>
          </div>

          <div className="m-[2rem] flex" style={{ color: "#9B5DFF" }}>
            <div
              className="border-2 flex w-[200px] rounded-full"
              style={{ borderColor: "#9B5DFF" }}
            >
              <MdHome className="w-[25px] h-[25px] m-[10px]" />
              <p className="m-[8px] text-lg font-bold">Home</p>
            </div>
          </div>

          <div className="m-[2rem] flex">
            <div className="flex w-[200px] " style={{ borderColor: "#9B5DFF" }}>
              <MdOutlineLocalOffer className="w-[25px] h-[25px] m-[10px]" />
              <p className="m-[8px] text-lg font-bold">Buy</p>
            </div>
          </div>

          <div className="m-[2rem] flex">
            <div
              className="flex w-[200px] rounded-full"
              style={{ borderColor: "#9B5DFF" }}
            >
              <CiClock2 className="w-[25px] h-[25px] m-[10px]" />
              <p className="m-[8px] text-lg font-bold">Rent</p>
            </div>
          </div>

          <div className="m-[2rem] flex">
            <div className="flex w-[200px] rounded-full">
              <CiBookmark className="w-[25px] h-[25px] m-[10px]" />
              <p className="m-[8px] text-lg font-bold">Saved</p>
            </div>
          </div>

          <div className="m-[2rem] flex">
            <div className="flex w-[200px] rounded-full">
              <AiOutlineShoppingCart className="w-[25px] h-[25px] m-[10px]" />
              <p className="m-[8px] text-lg font-bold">Cart</p>
            </div>
          </div>
          
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
