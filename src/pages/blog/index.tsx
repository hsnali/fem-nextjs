import React from "react";
import { Pane, majorScale } from "evergreen-ui";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import orderby from "lodash.orderby";
import Container from "@components/container";
import HomeNav from "@components/homeNav";
import PostPreview from "@components/postPreview";
import { posts as postsFromCMS } from "@data/content";

const Blog = ({ posts }) => {
  return (
    <Pane>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          {posts.map((post) => (
            <Pane key={post.title} marginY={majorScale(5)}>
              <PostPreview post={post} />
            </Pane>
          ))}
        </Container>
      </main>
    </Pane>
  );
};

Blog.defaultProps = {
  posts: [],
};

export function getStaticProps() {
  const postsPath = path.join(process.cwd(), "src/posts");
  const fileNames = fs.readdirSync(postsPath);
  const filePosts = fileNames.map((name) => {
    const file = fs.readFileSync(path.join(postsPath, name), "utf-8");
    return file;
  });

  const posts = [...postsFromCMS.published, ...filePosts].map(
    (post) => matter(post).data
  );

  return {
    props: {
      posts,
    },
  };
}

export default Blog;

/**
 * Need to get the posts from the
 * fs and our CMS
 */
