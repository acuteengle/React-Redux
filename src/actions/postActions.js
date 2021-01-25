
export function fetchPosts() {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                return res.json()
            })
            .then((posts) => {
                dispatch({
                    type: "FETCH_POSTS",
                    payload: posts
                })
            });
    }
}

export function createPost(postData) {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(postData),
        })
            .then((res) => {
                return res.json()
            })
            .then((post) => {
                dispatch({
                    type: "NEW_POST",
                    payload: post
                })
            });
    }
}