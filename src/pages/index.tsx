// @ts-nocheck
import Link from "next/link";
import styles from "@styles/Home.module.scss";

const Home = ({ content }) => (
  <div className={styles.home}>
    <div>
      <h1 className={styles.title}>{content.title}</h1>
      <Link href="/notes">
        <a className={styles.button}>View all notes</a>
      </Link>
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
