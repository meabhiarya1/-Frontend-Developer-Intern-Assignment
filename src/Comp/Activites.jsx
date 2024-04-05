import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Activites = () => {
    return (
        <div className="flex mb-[10rem] justify-between overflow-x-auto overflow-y-hidden">

            <div className="h-[350px] md:h-auto w-[259px] bg-[#F6F6F6] mt-4 rounded-[16px] mx-4 ">
                <div>
                    <div className="h-[260px]">
                        <img
                            src="./public/assets/img13.jpg"
                            className="rounded-xl object-cover h-48 md:h-full w-full p-4 "
                        />
                    </div>
                    <div className="flex justify-between m-3">
                        <div>
                            <div className="mb-1 font-medium text-xl">Sleep</div>
                            <div className="text-slate-600">4 Items</div>
                        </div>
                        <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] mt-1">
                            <HiArrowRight className="text-[white] w-[24px] h-[24px] m-[10px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[350px] md:h-auto w-[259px] bg-[#F6F6F6] mt-4 rounded-[16px] mx-4 ">
                <div>
                    <div className="h-[260px]">
                        <img
                            src="./public/assets/img13.jpg"
                            className="rounded-xl object-cover h-48 md:h-full w-full p-4 "
                        />
                    </div>
                    <div className="flex justify-between m-3">
                        <div>
                            <div className="mb-1 font-medium text-xl">Sleep</div>
                            <div className="text-slate-600">4 Items</div>
                        </div>
                        <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] mt-1">
                            <HiArrowRight className="text-[white] w-[24px] h-[24px] m-[10px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[350px] md:h-auto w-[259px] bg-[#F6F6F6] mt-4 rounded-[16px] mx-4 ">
                <div>
                    <div className="h-[260px]">
                        <img
                            src="./public/assets/img13.jpg"
                            className="rounded-xl object-cover h-48 md:h-full w-full p-4 "
                        />
                    </div>
                    <div className="flex justify-between m-3">
                        <div>
                            <div className="mb-1 font-medium text-xl">Sleep</div>
                            <div className="text-slate-600">4 Items</div>
                        </div>
                        <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] mt-1">
                            <HiArrowRight className="text-[white] w-[24px] h-[24px] m-[10px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activites
