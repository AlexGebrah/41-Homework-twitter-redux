export const CHANGE_STATS = 'CHANGE_STATS';
export const CHANGE_USER = 'CHANGE_USER'

export const changeUser = (userType, varType) => ({
    type: CHANGE_USER,
    payload: {userType, varType}
})

export const changeStats = (statsType, sum) => ({
    type: CHANGE_STATS,
    payload: {statsType, sum}
})