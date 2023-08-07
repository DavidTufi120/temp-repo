import { PostCard } from "../PostCard";
import "./styles.css";
import React from "react";
import Props from "prop-types";

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        id={post.id}
        key={post.id}
        title={post.title}
        body={post.body}
        cover={post.cover}
      />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: Props.arrayOf(
    Props.shape({
      title: Props.string.isRequired,
      cover: Props.string.isRequired,
      body: Props.string.isRequired,
      id: Props.number.isRequired,
    })
  ),
};
