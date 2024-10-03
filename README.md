컴포넌트 생성 예제본이랑 Auth 세팅 어느정도 해놨습니다. 해당 컴포넌트를 보고 싶을때는

App.tsx에서 return안에 있는거 싹다 지우시고 아래 컴포넌트 주석 단위로 복사해서 붙여놓고 확인해보시기 바랍니다.

    //보드 리스트 아이템
    // <>
    //   {latestBoardListMock.map((boardListItem) => (
    //     <BoardItem boardListItem={boardListItem} />
    //   ))}
    // </>

    // Top3~6 게시물 리스트
    // <>
    //   <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
    //     {top3BoardListMock.map((top3ListItem) => (
    //       <Top3Item top3ListItem={top3ListItem} />
    //     ))}
    //   </div>12345
    // </>

    // 댓글 리스트
    // <>
    //   <div
    //     style={{
    //       padding: "0 20px",
    //       display: "flex",
    //       flexDirection: "column",
    //       gap: "30px",
    //     }}
    //   >
    //     {commentListMock.map((commentListItem) => (
    //       <CommentItem commentListItem={commentListItem} />
    //     ))}
    //   </div>
    // </>

    // 좋아요 리스트
    // <>
    //   <div
    //     style={{
    //       display: "flex",
    //       columnGap: "30px",
    //       rowGap: "20px",
    //     }}
    //   >
    //     {favoriteListMock.map((favoriteListItem) => (
    //       <FavoriteItem favoriteListItem={favoriteListItem} />
    //     ))}
    //   </div>
    // </>


    //return 위에
    //로그인 화면 입력 usestate 같이 풀어야됨 주석
    // const [value, setValue] = useState<string>("");


    //로그인 화면 입력 컴포넌트
    // <>
    //   <InputBox
    //     label="이메일"
    //     type="text"
    //     placeholder="이메일 주소를 입력해주세요"
    //     value={value}
    //     error={true}
    //     setValue={setValue}
    //     message="aaaa"
    //   />
    // </>

    //Footer
    // <>
    //   <Footer />
    // </>

);
