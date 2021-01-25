import React from "react";

const Home = (props) => {
  return (
    <div className="App">
      <h1>Homepage</h1>
      <h3>Pages</h3>
      <p>
        <a href="/posts">/posts</a>
      </p>
      <p>
        <a href="/counter">/counter</a>
      </p>
    </div>
  );
};

export default Home;
