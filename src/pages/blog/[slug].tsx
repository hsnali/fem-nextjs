// @ts-nocheck

import React, { FC } from "react";
import path from "path";
import fs from "fs";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";
import { majorScale, Pane, Heading, Spinner } from "evergreen-ui";
import Head from "next/head";
import { useRouter } from "next/router";
import { Post } from "@src/@types/interfaces";
import Container from "@components/container";
import HomeNav from "@components/homeNav";

const BlogPost: FC<Post> = ({ source, frontMatter }) => {
  const content = hydrate(source);
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Pane width="100%" height="100%">
        <Spinner size={48} />
      </Pane>
    );
  }
  return (
    <Pane>
      <Head>
        <title>{`Known Blog | ${frontMatter.title}`}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          <Heading
            fontSize="clamp(2rem, 8vw, 6rem)"
            lineHeight="clamp(2rem, 8vw, 6rem)"
            marginY={majorScale(3)}
          >
            {frontMatter.title}
          </Heading>
          <Pane>{content}</Pane>
        </Container>
      </main>
    </Pane>
  );
};

BlogPost.defaultProps = {
  source: "",
  frontMatter: { title: "default title", summary: "summary", publishedOn: "" },
};

export function getStaticPaths() {
  const postsPath = path.join(process.cwd(), "src/posts");
  const fileNames = fs
    .readdirSync(postsPath)
    .map((filename) => path.parse(filename).name);

  return {
    paths: fileNames.map((name) => ({
      params: {
        slug: name,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsPath = path.join(process.cwd(), "src/posts");
  const file = fs.readFileSync(
    path.join(postsPath, `${params.slug}.mdx`),
    "utf-8"
  );
  const { data: frontMatter } = matter(file);
  const source = await renderToString(file, { scope: frontMatter });
  return {
    props: {
      source,
      frontMatter,
    },
  };
}

/**
 * Need to get the paths here
 * then the the correct post for the matching path
 * Posts can come from the fs or our CMS
 */
export default BlogPost;
