import Avatar from "./Avatar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeFollowers, changeFollowing} from "../actions/userAction.js";

const Stats = () => {
    const {stats, user} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeFollowers(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollowers(-1));
                    }}
                >
                    Followers: {stats.followers}
                </div>
                <div
                    onClick={() => dispatch(changeFollowing(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollowing(-1));
                    }}
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;