import Link from "next/link";
import styles from "@styles/Home.module.scss";

const Home = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
);

export function getStaticProps() {
  return {
    props: {
      content: {
        title: "Front End Masters Notes App",
      },
    },
  };
}

export default Home;
