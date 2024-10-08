import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import {
  AUTH_PATH,
  BOARD_DETAIL_PATH,
  BOARD_PATH,
  BOARD_UPDATE_PATH,
  BOARD_WRITE_PATH,
  MAIN_PATH,
  SEARCH_PATH,
  USER_PATH,
} from "constant";
import Commu from "./commu";
import Commu_nav from "./commu-nav";
import "./style.css";

const logo = require("../../assets/image/logo.png");
// component: 메인 화면 컴포넌트 //
export default function Main() {
  // render: 메인 화면 컴포넌트 렌더링 //
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(BOARD_WRITE_PATH());
  };

  return (
    <>
      <div className="main">
        <img src={logo} alt="로고" />
        <h1>PlayFit</h1>
        <button onClick={handleButtonClick}>오늘 운동을 공유해보세요!</button>
      </div>
      <div className="commu-container">
        <Commu_nav />
        <Commu />
      </div>
    </>
  );
}
