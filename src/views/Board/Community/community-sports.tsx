import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BOARD_WRITE_PATH } from "constant";
import "./community-sports.css";

const profile = require("../../../assets/image/blank-profile.png");
const bg = require("../../../assets/image/bg.png");
const heart = require("../../../assets/image/Vector.png");
const comment = require("../../../assets/image/Comments.png");

const Community_sports = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageClick = (page: number) => {
    setSelectedPage(page);
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(BOARD_WRITE_PATH());
  };

  return (
    <div className="cm">
      <div className="bg">
        <h1>커뮤니티</h1>
      </div>
      <div className="category-con">
        <a href="./community-life" className="cate">
          일상·잡담
        </a>
        <a href="./community-health" className="cate">
          헬스
        </a>
        <a href="./community-fila" className="cate">
          필라테스
        </a>
        <a href="./community-sports" className="sports">
          스포츠
        </a>
      </div>
      <div className="card-container">
        <Link to="/detail" className="link">
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
        </Link>
        <Link to="/detail" className="link">
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
        </Link>
        <Link to="/detail" className="link">
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
        </Link>
        <Link to="/detail" className="link">
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
        </Link>
        <Link to="/detail" className="link">
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
        </Link>
        <Link to="/detail" className="link">
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
        </Link>
      </div>
      <div className="pagination">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
          <button
            key={page}
            className={`page-button ${selectedPage === page ? "selected" : ""}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
        <button onClick={handleButtonClick} className="write">
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Community_sports;
