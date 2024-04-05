import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { HiHome } from "react-icons/hi";
import { CiShoppingTag } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const BottomBar = () => {
    return (
        <div className="flex justify-around z-10 border-2 border-slate-100 ">
            <div className="flex flex-col items-center border-t-[#9B5DFF] border-t-2 p-2 font-medium"><HiHome className="w-[25px] h-[25px] text-[#9B5DFF] " />
                <p className="text-sm text-[#9B5DFF]">Home</p>
            </div>

            <div className="flex flex-col items-center p-2 font-medium"><CiShoppingTag className="w-[25px] h-[25px]" />
                <p className="text-sm">Buy</p>
            </div>
            <div className="flex flex-col items-center p-2 font-medium"><IoTimeOutline className="w-[25px] h-[25px]" />
                <p className="text-sm">Rent</p>
            </div>
            <div className="flex flex-col items-center p-2 font-medium"><CiBookmark className="w-[25px] h-[25px]" />
                <p className="text-sm">Saved</p>
            </div>
            <div className="flex flex-col items-center p-2 font-medium"><IoCartOutline className="w-[25px] h-[25px]" />
                <p className="text-sm">Cart</p>
            </div>
        </div>
    )
}

export default BottomBar
