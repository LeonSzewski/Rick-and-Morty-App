import { SET_ACTIVE_PAGE } from "../types";

export const setActivePage = (activePage: number) => ({
  type: SET_ACTIVE_PAGE,
  activePage,
});
