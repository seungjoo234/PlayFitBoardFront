export const MAIN_PATH = () => "/";
export const AUTH_PATH = () => "/auth";
export const LIFE_PATH = () => "/community-life";
export const HEALTH_PATH = () => "/community-health";
export const FILA_PATH = () => "/community-fila";
export const SPORTS_PATH = () => "/community-sports";
export const SEARCH_PATH = (searchWord: string) => `/search/${searchWord}`;
export const USER_PATH = (userEmail: string) => `/user/${userEmail}`;
export const BOARD_PATH = () => "/board";
export const BOARD_DETAIL_PATH = (boardNumber: string | number) =>
  `/detail/${boardNumber}`;
export const BOARD_WRITE_PATH = () => "write";
export const BOARD_UPDATE_PATH = (boardNumber: string | number) =>
  `update/${boardNumber}`;
