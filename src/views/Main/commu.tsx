import React from "react";
import "./commu.css";

const profile = require("../../assets/image/blank-profile.png");
const bg = require("../../assets/image/bg.png");
const heart = require("../../assets/image/Vector.png");
const comment = require("../../assets/image/Comments.png");

const Commu = () => {
  return (
    <section className="community">
      <div className="commu">
        <h1>오늘의 인기글 🔥</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={bg} className="bgimg" />
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>안녕하세요</h1>
          <p>ㅁ너ㅏㅁㄴ러ㅏㅁㄴ렘ㄴㄴㅁ아너맒</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>반갑습니다!</h1>
          <p>ㅁㅁㄴㅇㅁㄴㅇ</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>필라테스 정보</h1>
          <p>ㅁㅁㄴㅇㄴㅁㅇㅏㅁㄴ렘ㄴㄴㅁ아너맒</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>헬스 정보</h1>
          <p>ㅁ너ㅏㅁㄴ러ㅏㅣㄷ가히ㅏㅎ디아너맒</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>헬스 정보</h1>
          <p>asdasdsdada러ㅏㅁㄴ렘ㄴㄴㅁ아너맒</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src={profile} />
            <h3>에디</h3>
            <p>2024-09-22 04:10</p>
          </div>
          <h1>헬스 정보</h1>
          <p>asfafasfsdddsadsadasd</p>
          <div className="right-items">
            <img src={heart} />
            <p>0</p>
            <img src={comment} />
            <p>0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commu;
