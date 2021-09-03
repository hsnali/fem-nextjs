// @ts-nocheck
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "./notes.module.scss";

const Note: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.notes__note}>
      <h1>Note: {id} </h1>
    </div>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/notes/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();

    return { props: {} };
  }

  const { data: note } = await response.json();

  return {
    props: { note },
  };
}

export default Note;
