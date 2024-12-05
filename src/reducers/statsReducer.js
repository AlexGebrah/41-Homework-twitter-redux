import {CHANGE_STATS} from "../actions/userAction.js";

const defaultState = {
    followers: 0,
    following: 0
}

export const statsReducer = (state = defaultState, action) => {
    switch (action.type) {

        case CHANGE_STATS: {
            const {statsType, sum} = action.payload;
            return {
                ...state,
                stats: {
                   [statsType]: Math.max(0, action.payload.statsType + sum),
                }
            }}

        default:
            return state;
    }
}