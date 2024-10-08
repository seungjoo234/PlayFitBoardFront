import React from "react";
import { Link } from "react-router-dom";
import "./commu-nav.css";

const Commu_nav = () => {
  return (
    <section className="intro">
      <Link to="/community-life" className="nav-card-life">
        <div className="nav-card">
          <h1>일상·잡담</h1>
          <p>서로 일상을 공유하세요!</p>
        </div>
      </Link>
      <Link to="/community-health" className="nav-card-health">
        <div className="nav-card">
          <h1>헬스</h1>
          <p>헬스장 꿀팁을 서로 공유하세요!</p>
        </div>
      </Link>
      <Link to="/community-fila" className="nav-card-fila">
        <div className="nav-card">
          <h1>필라테스</h1>
          <p>필라테스나 요가관련 정보를 나눠요!</p>
        </div>
      </Link>
      <Link to="/community-sports" className="nav-card-sports">
        <div className="nav-card">
          <h1>스포츠</h1>
          <p>스포츠관련 이야기를 나눠요!</p>
        </div>
      </Link>
    </section>
  );
};

export default Commu_nav;
