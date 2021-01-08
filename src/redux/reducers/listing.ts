import { SET_ACTIVE_PAGE } from "../types";
import { ListingAction } from "./types";

const initialState = {
  activePage: 1,
};

const listing = (state = initialState, action: ListingAction) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE: {
      const { activePage } = action;
      return {
        ...state,
        activePage,
      };
    }
    default:
      return state;
  }
};

export default listing;
