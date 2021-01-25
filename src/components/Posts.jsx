import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

import AddPost from "./AddPost";

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const postItems = this.props.posts.map((post) => {
      return (
        <div key={post.id} className="postCard">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <div className="App">
        <a href="/">Back to home</a>
        <h1>Posts</h1>
        <AddPost />
        {Object.keys(this.props.newPost).length !== 0 && (
          <>
            <h2>New Post</h2>
            <div className="postCard">
              <h3>{this.props.newPost.title}</h3>
              <p>{this.props.newPost.body}</p>
            </div>
          </>
        )}
        <h2>All Posts</h2>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.items,
    newPost: state.posts.item,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
