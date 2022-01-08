import profileReducer, {addPostActionCreator, PostType, ProfileType} from "./profile-reduser";

let state = {
    posts: [
        {id: 1, message: "Hi how are you?", likesCount: 5},
        {id: 2, message: "It is my First post!", likesCount: 23},
        {id: 3, message: "BlaBla", likesCount: 65},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
}

test('test add post', () => {
    let action = addPostActionCreator("New Post")
    let newPost = profileReducer(state, action)
    expect(newPost.posts.length).toBe(4)
})