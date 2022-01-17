
import {addPostActionCreator } from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))

        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps,)(MyPosts);
export type PostType = typeof MyPostsContainer;
export default MyPostsContainer;