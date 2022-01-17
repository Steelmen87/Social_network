import React, {useState} from 'react'
import styles from "./users.module.css"
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom';
import {UserType} from "../../redux/users-reduser";


type PropsType = {
    users: Array<UserType>
    unfollow: (id: number) => void
    followingInProgress: Array<number>
    follow: (id: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

let User: React.FC<PropsType> = (props) => {
    const [search, setSearch] = useState('')

    return <div>
        {
            props.users
                .filter(u => u.name.indexOf(search) > -1)
                .map(u => <div key={u.id}>
                <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                     alt=""/>
                     </NavLink>
            </div>
            <div>
        {u.followed
            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.unfollow(u.id)
            }}>Unfollow</button>
            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                props.follow(u.id)
            }}>Follow</button>}
            </div>
            </span><span>
            <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
            </span>
            </span></div>)
        }
    </div>
}
export default User;