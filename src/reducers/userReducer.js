import { CHANGE_USER} from "../actions/userAction.js";

const defaultUser = {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
}

export const userReducer = (state = defaultUser, action) => {
    switch (action.type) {

        case CHANGE_USER: {
            const {userType, varType} = action.payload;
            return {
                ...state,
                user:
                    {[userType]: varType}
            }
        }
        default:
            return state;
    }
}