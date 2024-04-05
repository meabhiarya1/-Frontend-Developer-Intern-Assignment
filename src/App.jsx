import React from "react";
import "./App.css";
import LeftSideBar from "./Comp/LeftSideBar";
import MiddleSideBar from "./Comp/MiddleSideBar";
import BottomBar from "./Comp/BottomBar";
import RightSideBar from "./Comp/RightSideBar";

const App = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-around",
          overflowX: "hidden"
        }}
      >
        <LeftSideBar />
        <MiddleSideBar />
        <RightSideBar />
      </div>
      {/* mobile div */}
      <BottomBar />
    </>

  );
};

export default App;