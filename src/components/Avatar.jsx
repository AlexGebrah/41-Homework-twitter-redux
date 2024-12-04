import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../actions/userAction.js";

const Avatar = ({size}) => {
    const {user} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                dispatch(changeName(name));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user?.avatar} alt={user?.name}
        />
    );

};

export default Avatar;