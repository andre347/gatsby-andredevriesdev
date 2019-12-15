// @flow strict
import React from "react";
import { Link } from "gatsby";
import useDarkMode from "use-dark-mode";
import Author from "./Author";
import Comments from "./Comments";
import Content from "./Content";
import Meta from "./Meta";
import Tags from "./Tags";
import styles from "./Post.module.scss";

const Post = ({ post }) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const darkMode = useDarkMode(false);

  return (
    <div className={!darkMode.value ? styles["post"] : styles["postDark"]}>
      <Link
        className={
          !darkMode.value
            ? styles["post__home-button"]
            : styles["postDark__home-button"]
        }
        to="/"
      >
        All Articles
      </Link>

      <div className={styles["post__content"]}>
        <Content body={html} title={title} />
      </div>

      <div className={styles["post__footer"]}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles["post__comments"]}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
