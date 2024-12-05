import {CHANGE_STATS, CHANGE_USER} from "../actions/userAction.js";

export const twitterReducer = (state = {}, action) => {
    switch (action.type) {

        case CHANGE_USER: {
            const {userType, varType} = action.payload;
            return {
                ...state,
                user: {
                    ...state.user,
                    [userType]: state.user[varType]
                }
            }
        }

        case CHANGE_STATS: {
            const {statsType, sum} = action.payload;
            return {
                ...state,
                stats: {
                    ...state.stats,
                    [statsType]: Math.max(0, state.stats[statsType] + sum),
                }
            }}

            default:
                    return state;
    }
}