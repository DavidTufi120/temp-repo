import "./styles.css";
import Props from "prop-types";
import React from "react";

export const PostCard = ({ title, body, cover, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>
        {title}

        {id}
      </h1>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: Props.string.isRequired,
  cover: Props.string.isRequired,
  body: Props.string.isRequired,
  id: Props.number.isRequired,
};
