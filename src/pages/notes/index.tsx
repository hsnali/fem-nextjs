// @ts-nocheck
import Link from "next/link";
import styles from "./notes.module.scss";

const Notes = ({ notes }) => {
  return (
    <div className={styles.notes}>
      <div className={styles.notes__items}>
        {notes.map((note) => (
          <div key={note.id} className={styles.notes__item}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <a>
                <div>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/notes`);
  const { data: notes } = await res.json();

  return {
    props: { notes },
  };
}

export default Notes;
