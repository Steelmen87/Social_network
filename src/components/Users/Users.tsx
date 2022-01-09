import React, {useState} from 'react'
import {setFilter, UserType} from "../../redux/users-reduser";
import {useDispatch} from "react-redux";
import Paginator from "../Paginator/Paginator";
import User from "./User";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: Array<UserType>
    unfollow: (id: number) => void
    followingInProgress: Array<number>
    follow: (id: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

let Users: React.FC<PropsType> = (props) => {
    let {totalUsersCount, pageSize, currentPage, onPageChanged} = props
    let dispatch = useDispatch()
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages: number[] = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const [search, setSearch] = useState('')

    const onSearchChange = (e) => {
        setSearch(e.target.value)
        dispatch(setFilter(search))
    }


    return <div>
        <input placeholder={"search"} value={search} onChange={onSearchChange}/>
        <div><strong>Total Users Count: {totalUsersCount}</strong></div>
        <Paginator
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
        />
        <User {...props}/>
    </div>
}
export default Users;