import React from "react";
import "./App.css";
import { FaBagShopping } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { CiShoppingTag } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
// import { CiBookmark } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";




const App = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-evenly",
          overflowX: "hidden"
        }}
      >
        {/* left sidebar */}
        <div
          className="w-1/5 min-w-[220px] hidden md:block"
        // style={{ border: "2px solid black" }}
        >

          <div className="m-[2rem]">
            <div className="flex flex-row items-center ">
              <div style={{ margin: "10px 0px" }}>
                <FaBagShopping
                  className="w-auto h-8 m-2"
                  style={{ color: "#9B5DFF" }}
                />
              </div>

              <div
                className="flex font-bold text-[15px] md:text-xl "
                style={{ color: "#9B5DFF" }}
              >
                <h3 className="my-4 ">shop</h3>
                <div className="border-r-2 mx-2 h-16 border-black text-[15px] md:text-xl"></div>
              </div>

              <div>
                <div className="font-bold text-[15px] md:text-xl">Back to</div>
                <p
                  className="font-bold text-[15px] md:text-xl flex"
                  style={{ color: "#9B5DFF" }}
                >
                  p<span className="text-black text-[15px] lg:text-xl">fit</span>
                  <IoArrowForwardCircleOutline className="text-black mt-2 ms-2 h-[20px] w-[20px] text-[15px] md:text-xl" />
                </p>
              </div>
            </div>
          </div>

          <div className="m-[2rem] flex " style={{ color: "#9B5DFF" }}>
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

          <div className="m-[1rem] flex">
            <div className="h-fit  border-[#CCCCCC] border-[1px] rounded-[16px] flex items-center justify-between my-7 ml-2 min-[910px]:hidden">
              <div className="flex items-center ">
                <RiCustomerService2Fill className="w-[24px] h-[24px] text-[#9B5DFF] m-3" />
                <div className="  text-[#9B5DFF] font-medium">Help Center</div>
              </div>
              <div>
                <HiOutlineArrowCircleRight className="size-[24px] text-[#9B5DFF] mr-2" />
              </div>
            </div>
          </div>
        </div>

        {/* middle */}

        <div className="w-3/5 max-[910px]:w-4/5 shrink-1 md:pr-16 lg:pr-0 md:mt-5">

          <div className="flex justify-between md:hidden">
            <div className="my-[1.5rem]">
              <div className="flex flex-row items-center ">
                <div style={{ margin: "10px 0px" }}>
                  <FaBagShopping
                    className="w-auto h-8 m-2"
                    style={{ color: "#9B5DFF" }}
                  />
                </div>

                <div
                  className="flex font-bold text-[15px] md:text-xl "
                  style={{ color: "#9B5DFF" }}
                >
                  <h3 className="my-4 ">shop</h3>
                  <div className="border-r-2 mx-2 h-16 border-black text-[15px] md:text-xl"></div>
                </div>

                <div>
                  <div className="font-bold text-[15px] md:text-xl">Back to</div>
                  <p
                    className="font-bold text-[15px] md:text-xl flex"
                    style={{ color: "#9B5DFF" }}
                  >
                    p<span className="text-black text-[15px] lg:text-xl">fit</span>
                    <IoArrowForwardCircleOutline className="text-black mt-2 ms-2 h-[20px] w-[20px] text-[15px] md:text-xl" />
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[2rem] pt-2">
              <img src="/assets/img15.png" className="rounded-full h-[56px]" /></div>
          </div>


          {/* location and search */}
          <div className="flex flex-col-reverse lg:flex-row">
            {/* location */}
            <div className="flex justify-between items-center text-sm md:text-xl bg-slate-100 h-[52px] p-2 rounded-full min-w-52 my-5 md:my-5 md:mr-3 w-full">
              <div className="flex items-center ">
                <FaLocationDot className="text-lg" style={{ color: "#9B5DFF" }} />
                <div className="px-[15px] text-slate-500 text-sm font-medium ">
                  Deliver to: <span className="text-black">Noida, 201309</span>
                </div>
              </div>
              <div>
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>

            {/* search box */}
            <div className="flex justify-between items-center md:mt-5 text-2xl bg-slate-100 h-[52px] w-full p-3 rounded-xl md:mr-0">
              <div className="flex items-center justify-center">
                <CiSearch className="text-xl text-black font-medium	" />
                <div>
                  <input
                    placeholder="Search for Product or Store"
                    className="m-2 p-2 w-full bg-slate-100 text-sm font-medium border-none"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          {/* grey box */}
          <div>
            <div className="bg-[#CCCCCC] h-24 md:h-56 border-black mt-4 rounded-xl w-full"></div>
          </div>

          {/* buy new , refurbished, flexibly */}
          <div className="flex mt-4 md:mt-8 overflow-x-auto ">
            <div className="bg-gradient-to-r from-[#E9ECFF] to-[#ABB8FF] rounded-xl w-1/3 h-auto text-center mx-1">
              <div className="text-[#4562FF] font-bold md:text-2xl text-xs p-2 md:p-4 rounded-xl">
                Buy New
              </div>
              <div className="text-slate-500 p-2 md:p-4 font-medium md:mt-5 text-[.8rem]">
                Authorized and tested Equipment
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F9E9FF] to-[#EEABFF] rounded-xl w-1/3 h-auto mx-1 text-center">
              <div className="text-[#CC00FF] font-bold md:text-2xl text-xs p-2 md:p-4 rounded-xl">
                Buy Refurbished
              </div>
              <div className="text-slate-500 p-2 md:p-4 font-medium md:mt-5 text-[.8rem]">
                Affordable yet Efficient
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F0FFE9] to-[#D5FFAB] rounded-xl w-1/3 h-auto mx- text-center">
              <div className="text-[#1B6700] font-bold md:text-2xl text-[11px] p-2 md:p-4 rounded-xl">
                Rent Flexibly
              </div>
              <div className="text-slate-500 p-2 md:p-4 font-medium md:mt-5 text-[.8rem]">
                Efficiency without Commitment
              </div>
            </div>
          </div>

          {/* Browse by Category */}
          <div className="flex mt-4 items-center w-full">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
            <div className="font-bold text-xl md:text-2xl m-3">Browse by Category</div>
            <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
          </div>

          {/* category */}
          <div className="flex justify-around overflow-x-auto overflow-y-hidden">
            <div className="flex flex-col items-center ">
              <img
                src="./public/assets/img1.png"
                className="rounded-xl md:w-[160px] md:h-[160px] w-24 h-24"
              />
              <p className="text-sm md:text-lg font-medium text-center my-2">Ultrasound Therapy</p>
            </div>

            <div className="flex flex-col items-center mx-3">
              <img
                src="./public/assets/img2.png"
                className="rounded-xl md:w-[160px] md:h-[160px] w-24 h-24"
              />
              <p className="text-sm md:text-lg font-medium text-center my-2">Electro Therapy</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="./public/assets/img3.png"
                className="rounded-xl md:w-[160px] md:h-[160px] w-24 h-24"
              />
              <p className="text-sm md:text-lg font-medium text-center my-2">Electro Therapy</p>
            </div>

            <div className="flex flex-col items-center mx-2 ">
              <img
                src="./public/assets/img4.png"
                className="rounded-xl md:w-[160px] md:h-[160px] w-24 h-24"
              />
              <p className="text-sm md:text-lg font-medium text-center my-2">Electro Therapy</p>
            </div>
          </div>

          {/* single line */}
          <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 my-3"></div>

          <div className="bg-gradient-to-r from-[#853CA8] to-[#B85DFF] overflow-x-auto overflow-y-hidden h-[530px] md:h-[580px] rounded-xl">
            {/* Specialist Favorites */}
            <div className="flex mt-3 items-center w-full overflow-x-auto overflow-y-hidden">
              <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
              <div className="md:font-bold text-3xl m-3 text-white font-medium">Specialist Favorites</div>
              <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
            </div>

            {/* favorites */}
            <div className="flex justify-evenly overflow-x-auto overflow-y-hidden ">
              <div className="md:h-[450px] h-[390px] w-[316px] bg-[#F6F6F6] mt-4 rounded-[16px] mx-2">
                <div>
                  <div className="md:h-[350px] h-[300px]">
                    <img
                      src="./public/assets/img5.png"
                      className="object-cover h-full w-full rounded-[16px]"
                    />
                    <div className="flex justify-between m-3">
                      <div>
                        <div className="mb-2 font-medium md:text-lg text-sm">
                          Gym Equipments
                        </div>
                        <div className="flex flex-row text-slate-500 text-sm md:text-sm text-nowrap">
                          Starting at
                          <span className="text-[#9B5DFF] mx-1 font-medium">
                            ₹300
                          </span>
                        </div>
                      </div>
                      <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] md:mt-2 flex justify-center items-center">
                        <HiArrowRight className="text-[white] w-[24px] h-[24px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:h-[450px] h-[390px] w-[316px] bg-[#F6F6F6] mt-4 rounded-[16px] mx-2">
                <div>
                  <div className="md:h-[350px] h-[300px]">
                    <img
                      src="./public/assets/img6.png"
                      className="object-cover h-full w-full rounded-[16px]"
                    />
                    <div className="flex justify-between m-3">
                      <div>
                        <div className="mb-2 font-medium md:text-lg text-sm">
                          Gym Equipments
                        </div>
                        <div className="flex flex-row text-slate-500 text-sm md:text-sm text-nowrap">
                          Starting at
                          <span className="text-[#9B5DFF] mx-1 font-medium">
                            ₹300
                          </span>
                        </div>
                      </div>
                      <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] md:mt-2 flex justify-center items-center">
                        <HiArrowRight className="text-[white] w-[24px] h-[24px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:h-[450px] h-[390px] w-[316px] bg-[#F6F6F6] mt-4 rounded-[16px] mx-2">
                <div>
                  <div className="md:h-[350px] h-[300px]">
                    <img
                      src="./public/assets/img7.png"
                      className="object-cover h-full w-full rounded-[16px]"
                    />
                    <div className="flex justify-between m-3">
                      <div>
                        <div className="mb-2 font-medium md:text-lg text-sm">
                          Gym Equipments
                        </div>
                        <div className="flex flex-row text-slate-500 text-sm md:text-sm text-nowrap">
                          Starting at
                          <span className="text-[#9B5DFF] mx-1 font-medium">
                            ₹300
                          </span>
                        </div>
                      </div>
                      <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] md:mt-2 flex justify-center items-center">
                        <HiArrowRight className="text-[white] w-[24px] h-[24px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* single line */}
          {/* <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 m-4"></div> */}

          {/* top selling */}
          <div className="flex mt-3 items-center w-full ">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
            <div className="font-[500] text-3xl m-3">Top Selling</div>
            <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
          </div>

          {/* top selling component */}
          <div className="flex overflow-x-auto overflow-y-hidden">
            <div className="bg-[#F6F6F6] w-1/3 h-auto rounded-[12px] mr-8">
              <div className="h-auto p-3">
                <img
                  src="./public/assets/img8.png"
                  className="object-cover h-auto w-full rounded-[16px]"
                />
              </div>
              {/* <p className="w-[139px] h-[24px] font-[600] text-lg m-3">
                Knee Bandage
              </p>
              <p className="w-[139px] h-[24px] font-[400] text-lg m-3">
                Starts from
              </p>
              <p className="w-[155px] h-[30px] font-[500] text-2xl m-3">
                ₹100 - ₹1,300
              </p> */}
              <div className="flex justify-center">
                <button className="border border-[#9B5DFF] w-[217px] p-[12px] rounded-[8px] text-[#9B5DFF] font-medium text-2xl">
                  Explore
                </button>
              </div>
            </div>

            <div className="bg-[#F6F6F6] w-1/3 h-auto rounded-[12px] mr-8">
              <div className="h-auto p-3">
                <img
                  src="./public/assets/img8.png"
                  className="object-cover h-full w-full rounded-[16px]"
                />
              </div>
              {/* <p className="w-[139px] h-[24px] font-[600] text-lg m-3">
                Knee Bandage
              </p>
              <p className="w-[139px] h-[24px] font-[400] text-lg m-3">
                Starts from
              </p>
              <p className="w-[155px] h-[30px] font-[500] text-2xl m-3">
                ₹100 - ₹1,300
              </p> */}
              <div className="flex justify-center">
                <button className="border border-[#9B5DFF] w-[217px] p-[12px] rounded-[8px] text-[#9B5DFF] font-medium text-2xl">
                  Explore
                </button>
              </div>
            </div>

            <div className="bg-[#F6F6F6] w-1/3 h-auto rounded-[12px] mr-8">
              <div className="h-auto p-3">
                <img
                  src="./public/assets/img8.png"
                  className="object-cover h-full w-full rounded-[16px]"
                />
              </div>
              {/* <p className="w-[139px] h-[24px] font-[600] text-lg m-3">
                Knee Bandage
              </p>
              <p className="w-[139px] h-[24px] font-[400] text-lg m-3">
                Starts from
              </p>
              <p className="w-[155px] h-[30px] font-[500] text-2xl m-3">
                ₹100 - ₹1,300
              </p> */}
              <div className="flex justify-center">
                <button className="border border-[#9B5DFF] w-[217px] p-[12px] rounded-[8px] text-[#9B5DFF] font-medium text-2xl">
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* single line */}
          {/* <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 m-8"></div> */}

          {/* Featured Brand */}
          <div className="flex mt-3 items-center w-full overflow-x-auto overflow-y-hidden">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
            <div className="font-[500] text-3xl m-3">Featured Brand</div>
            <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
          </div>

          {/* Brand logo */}
          <div className="flex justify-between gap-x-1 mt-6 w- overflow-x-auto overflow-y-hidden">
            <div className="w-[172.14px] h-[171px]">
              <img
                src="./public/assets/img9.png"
                className="rounded-full shadow-xl"
              />
            </div>
            <div className="w-[172.14px] h-[171px]">
              {" "}
              <img
                src="./public/assets/img10.png"
                className="rounded-full shadow-xl"
              />
            </div>
            <div className="w-[172.14px] h-[171px]">
              {" "}
              <img
                src="./public/assets/img11.png"
                className="rounded-full shadow-xl"
              />
            </div>
            <div className="w-[172.14px] h-[171px]">
              {" "}
              <img
                src="./public/assets/img12.png"
                className="rounded-full shadow-xl"
              />
            </div>
          </div>

          {/* single line */}
          {/* <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 m-8"></div> */}

          {/* Popular activities */}
          <div className="flex mt-3 items-center w-full overflow-x-auto overflow-y-hidden">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
            <div className="font-[500]  text-3xl m-3">Popular Activities</div>
            <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
          </div>

          {/* Activites */}
          <div className="flex mb-[10rem] justify-between overflow-x-auto overflow-y-hidden">
            <div className="h-auto w-[259px] bg-[#F6F6F6] mt-4 rounded-[16px] mr-8 ">
              <div>
                <div className="h-[260px]">
                  <img
                    src="./public/assets/img13.jpg"
                    className="rounded-lg object-cover h-full w-full p-4 "
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
            <div className="h-auto w-[259px] bg-[#F6F6F6] mt-4 rounded-[16px] mr-8 ">
              <div>
                <div className="h-[260px]">
                  <img
                    src="./public/assets/img13.jpg"
                    className="rounded-lg object-cover h-full w-full p-4 "
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

            <div className="h-[auto] w-[259px] bg-[#F6F6F6] mt-4 rounded-[16px] mr-8 ">
              <div>
                <div className="h-[260px]">
                  <img
                    src="./public/assets/img13.jpg"
                    className="rounded-lg object-cover h-full w-full p-4 "
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

          {/* last div */}
        </div>


        <div className="flex w-1/5 max-[910px]:hidden">
          <div className=" flex flex-col ">
            <div className=" mt-[3rem] flex justify-end">
              <img src="/assets/img15.png" className="rounded-full h-[56px]" />
            </div>

            <div className="h-fit  border-[#CCCCCC] border-[1px] rounded-[16px] flex items-center justify-between my-7 ml-2">
              <div className="flex items-center ">
                <RiCustomerService2Fill className="w-[24px] h-[24px] text-[#9B5DFF] m-3" />
                <div className="  text-[#9B5DFF] font-medium">Help Center</div>
              </div>
              <div>
                <HiOutlineArrowCircleRight className="size-[24px] text-[#9B5DFF] mr-2" />
              </div>
            </div>
          </div>
        </div>

        {/* mobile div */}



      </div>

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
    </>

  );
};

export default App;