import {connect} from "react-redux";
import {
    getUsersThunkCreator,
    follow, unfollow, toggleFollowingProgress, setFilter
} from "../../redux/users-reduser";
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {
    getPageSize,
    getUsers,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from "../../redux/UserSelectors";

type UserType = {
    id: number,
    name: string,
    status: string,
    photos: { small: string, large: string },
    followed: boolean,
    onPageChanged: (pageNumber: number) => void
}

type PropsType = {
    setFilter: (filter: string) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean) => void
    users: Array<UserType>
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setUsers: (res: string) => void
    unfollow: (id: number) => void
    follow: (id: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
    getUsers: (currentPage: number, pageSize: number) => void


}
/*export type UsersPropsType = UserType & PropsType*/

// @ts-ignore
class UsersContainer extends React.Component<PropsType> {
    state = {
        search: '',
    }

    componentDidMount() {
        const {currentPage,pageSize} = this.props
        this.props.getUsers(currentPage,pageSize);

    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber,pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        filter: state.usersPage.filter,
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setFilter,
        follow,
        unfollow,
        toggleFollowingProgress: toggleFollowingProgress,
        getUsers: getUsersThunkCreator
        // @ts-ignore
    }))(UsersContainer);
