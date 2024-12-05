import {CHANGE_AVATAR,  CHANGE_NAME, CHANGE_STATS} from "../actions/userAction.js";

export const twitterReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {
                ...state,
                user: {
                    ...state.user,
                    avatar: action.payload || state.user.avatar
                }
            };

        case CHANGE_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload || state.user.name
                }
            };

        case CHANGE_STATS: {
            const {statsType, sum} = action.payload;
            return {...state,
                stats: {
                    ...state.stats,
                    [statsType]: Math.max(0, state.stats[statsType] + sum),
                }
            }}

            default:
                    return state;
    }
}